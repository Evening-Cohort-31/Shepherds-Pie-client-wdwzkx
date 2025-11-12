import "./App.css";
import { useState } from "react";
import { PizzaBuilder } from "./components/Pizzas/PizzaBuilder";
import { PizzaList } from "./components/Pizzas/PizzaList";
// 💡 For setup instructions, see:
// docs/react-bootstrap-setup.md → section "4. Using Components"
import Button from "react-bootstrap/Button";

export const App = () => {
  const [order, setOrder] = useState(null); //Current order object
  const [pizzas, setPizzas] = useState([]); // All pizzas added to this order
  const [showBuilder, setShowBuilder] = useState(false);  // Is PizzaBuilder form is visible?

  //What happens when the Add Pizza button is clicked? We save the pizza, display it in the list, and close the form.
  const handleAddPizza = (pizza) => {
      const newPizza = {
        ...pizza,
        id: Date.now(), // temporary local ID
        // TODO: track order id foreign key
        };
      setPizzas((prev) => [...prev, newPizza])
      setShowBuilder(false)
    }
    // TODO: POST new pizza to http://localhost:8088/pizzas


    return (
    <div className="p-8 max-w-3xl mx-auto bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">
        🍕 Pizza Order Builder
      </h1>

      {/* Add Pizzas button */}
      {!showBuilder && (
        <button
          onClick={() => {
            setShowBuilder(true);
          }}
          className="add-pizza-btn"
        >
          Add Pizza
        </button>
      )}

      {/* STEP 2: Pizza Builder Form */}
      {showBuilder && (
        <PizzaBuilder onSave={handleAddPizza}/>
      )}

      {/* STEP 3: Pizza List */}
      <PizzaList pizzas={pizzas} />
        {/* TODO: later add onDelete for removing pizzas */}
    </div>
  )
}
