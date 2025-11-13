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




export const PizzaForm = ({ onSave, editingPizza }) => {
  
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




  
  // Intialize pizza options
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

  
// Prefill the form (the pizza state) if editing an existing pizza
  useEffect(() => {
    if (editingPizza) {
      setPizza(editingPizza);
    }
  }, [editingPizza])







  // Handle dropdown changes 
  const handleChange = (pizzaField, userSelectedValue) => {
    setPizza((previousState) => ({ ...previousState, [pizzaField]: parseInt(userSelectedValue) }));
  };

  //Handle toggle changes: replacing the entire toppings array in one go
  const handleToppingCheckbox = (toppingId, isChecked) => {
    const newSelection = isChecked
      ? [...pizza.toppings, toppingId]
      : pizza.toppings.filter((id) => id !== toppingId);

    setPizza((prev) => ({...prev,
      toppings: newSelection,
    }))
  }


  // Save pizza to order
  const handleSave = () => onSave(pizza);

  






  //render
    return (
    <div className="pizza-builder">
       <h2>🍕 Build Your Pizza</h2>

      {/* --- Base Pizza Form --- */}
      <div className="pizza-selections-section">
        {/* Size */}
        <div>
          <label className="pizza-selection-title">Size</label>
          <select
            value={pizza.sizeId}
            onChange={(e) => handleChange("sizeId", e.target.value)}
            className="dropdown-value"
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
          <label className="pizza-selection-title">Cheese</label>
          <select
            value={pizza.cheeseId}
            onChange={(e) => handleChange("cheeseId", e.target.value)}
            className="dropdown-value"
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
          <label className="pizza-selection-title">Sauce</label>
          <select
            value={pizza.sauceId}
            onChange={(e) => handleChange("sauceId", e.target.value)}
            className="dropdown-value"
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
      <div className="toppings-section">
        <p className="pizza-selection-title">Toppings:</p>
        {options.toppings.map((t) => (
          <label key={t.id} className="checkbox-selection">
            <input
              type="checkbox"
              checked={pizza.toppings.includes(t.id)}
              onChange={(e) => handleToppingCheckbox(t.id, e.target.checked)}
            />
            <span className="checkbox-values">
              {t.name} (+${t.price})
            </span>
          </label>
        ))}
      </div>

      {/* Total */}
      <div className="total-section">
        <p className="total-display">
          Total: ${pizza.price}
        </p>
      </div>
      {/* Add to Order [or] Save Changes */}
      <div>
        <button
          type="button"
          className="pizza-builder button"
          onClick={handleSave}> 
                  {/* // if we did onClick={onSave(pizza)} instead of define handleSave you’re not passing a function — you’re calling onSave immediately, as soon as the component renders.*/}
          {editingPizza ? "Save Changes" : "Add to Order"} 
        </button>
      </div>
    </div>
  );
}
