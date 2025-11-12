//This is everything for the pizza builder form. It handles showing the options, tracking state, tracking price, and ability to save the pizza to add to order
import { useState, useEffect } from "react";
import {
  getPizzaSauceOptions,
  getPizzaCheeseOptions,
  getPizzaSizesOptions,
  getPizzaToppingOptions,
} from "../../services/pizzaOptionsService";
import { calculatePizzaPrice } from "../../utils/pizzaPriceCalculator";
import "./PizzaBuilder.css";




export const PizzaBuilder = ({ onSave }) => {
  
  // track state of options (idk if this is necessary)
  const [options, setOptions] = useState({
    sizes: [],
    cheeses: [],
    sauces: [],
    toppings: [],
  });

  // Pizza state
  const [pizza, setPizza] = useState(
     {
      sizeId: 1,
      cheeseId: 1,
      sauceId: 1,
      toppings: [],
      price: 0,
    }
  );

  // Intialize options
  useEffect(() => {
    getPizzaSauceOptions().then((sauces) => {
    setOptions((prev) => ({ ...prev, sauces }));
    });

    getPizzaCheeseOptions().then((cheeses) => {
    setOptions((prev) => ({ ...prev, cheeses }));
    });

    getPizzaSizesOptions().then((sizes) => {
    setOptions((prev) => ({ ...prev, sizes }));
    });

    getPizzaToppingOptions().then((toppings) => {
    setOptions((prev) => ({ ...prev, toppings }));
    });
  }, []);

  // Update price whenever user selections that cost money change
  useEffect(() => {
    const newPrice = calculatePizzaPrice(pizza, options);
    setPizza((previousPizzaProps) => ({ ...previousPizzaProps, price: newPrice }));
  }, [pizza.sizeId, pizza.toppings, options]);

  




  // Handle dropdown changes
  const handleChange = (pizzaField, userSelectedValue) => {
    setPizza((previousState) => ({ ...previousState, [pizzaField]: parseInt(userSelectedValue) }));
  };

  //Handle toggle changes: replacing the entire toppings array in one go
 // Only one function needed
  const handleToppingCheckbox = (toppingId, isChecked) => {
    const newSelection = isChecked
      ? [...pizza.toppings, toppingId]
      : pizza.toppings.filter((id) => id !== toppingId);

    setPizza((prev) => ({...prev,
      toppings: newSelection,
    }))
  }


  // 💾 Save pizza to order
  const handleSave = () => onSave(pizza);

  






  //render
    return (
    <div className="pizza-builder">
       <h2>🍕 Build Your Pizza</h2>

      {/* --- Base Pizza Form --- */}
      <div className="space-y-3 mb-4">
        {/* Size */}
        <div>
          <label className="block font-medium">Size</label>
          <select
            value={pizza.sizeId}
            onChange={(e) => handleChange("sizeId", e.target.value)}
            className="border rounded px-2 py-1 w-full"
          >
            {options.sizes.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name} ({s.inches}" - ${s.base_price})
              </option>
            ))}
          </select>
        </div>

        {/* Cheese */}
        <div>
          <label className="block font-medium">Cheese</label>
          <select
            value={pizza.cheeseId}
            onChange={(e) => handleChange("cheeseId", e.target.value)}
            className="border rounded px-2 py-1 w-full"
          >
            {options.cheeses.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </div>

        {/* Sauce */}
        <div>
          <label className="block font-medium">Sauce</label>
          <select
            value={pizza.sauceId}
            onChange={(e) => handleChange("sauceId", e.target.value)}
            className="border rounded px-2 py-1 w-full"
          >
            {options.sauces.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Toppings */}
      <div className="mb-4">
        <p className="font-semibold mb-1">Toppings:</p>
        {options.toppings.map((t) => (
          <label key={t.id} className="block cursor-pointer">
            <input
              type="checkbox"
              checked={pizza.toppings.includes(t.id)}
              onChange={(e) => handleToppingCheckbox(t.id, e.target.checked)}
            />
            <span className="ml-2">
              {t.name} (+${t.price})
            </span>
          </label>
        ))}
      </div>

      {/* --- Total & Save --- */}
      <div className="mt-4 flex justify-between items-center">
        <p className="font-bold text-lg">
          Total: ${pizza.price}
        </p>
        <button
          type="button"
          className="pizza-builder button"
          onClick={handleSave}
        > Add to Order
          {/* TODO: We dont have the ability to edit an existing pizza yet. But once we do, if this is an existing pizza, lets display Save Changes instead [existingPizza ? "Save Changes" : "Add to Order"] */}
        </button>
      </div>
    </div>
  );
}
