import { useState } from "react";
import { PizzaForm } from "./PizzaForm.jsx";
import { PizzaList } from "./PizzaList.jsx";
import "./PizzaBuilder.css";
// 💡 For setup instructions, see:
// docs/react-bootstrap-setup.md → section "4. Using Components"

export const PizzaOrderBuilder = () => {
  const [order, setOrder] = useState(null) //Current order object ????? feels necessary but idk how to use it yet
  const [pizzas, setPizzas] = useState([]) // All pizzas added to this order
  const [showForm, setShowForm] = useState(false) // Is PizzaForm is visible?
  const [editingPizza, setEditingPizza] = useState([]) // Tracks which pizza is being edited

  


  //What happens when the Add Pizza button is clicked? We create/save the pizza, display it in the PizzaList, and close the form.
  const handleAddPizza = (pizza) => {
    const newPizza = {
      ...pizza,
      id: Date.now(), // temporary local ID
      // TODO: track order id foreign key
    };
    setPizzas((prev) => [...prev, newPizza]);
    setShowForm(false);
  };
  // TODO: POST new pizza to http://localhost:8088/pizzas


  // Edit an existing pizza
  const handleEditPizza = (pizza) => {
    setEditingPizza(pizza);   // sets editingPizza with the pizza details
    setShowForm(true);     // open the builder
  };
 // TODO: PATCH the existing pizza to http://localhost:8088/pizzas
  
 

  // Save changes to existing pizza
  const handleUpdatePizza = (updatedPizza) => {
    setPizzas((prev) =>
      prev.map((p) => (p.id === updatedPizza.id ? updatedPizza : p))
    );
    setEditingPizza(null);    // ✅ reset after saving
    setShowForm(false);
    }





  
 return (
    <div className="p-8 max-w-3xl mx-auto bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">
        🍕 Pizza Order Builder
      </h1>

      {/* Add Pizzas button */}
      {!showForm && (
        <button
          onClick={() => {
            setShowForm(true);
            setEditingPizza(null);   // ✅ ensure form starts blank
          }}
          className="add-pizza-btn"
        >
          Add Pizza
        </button>
      )}

      {/* STEP 2: Pizza Builder Form */}
      {/* If editing → open modal  */}
          {showForm && editingPizza && (
            <div className="modal-simple">
              <PizzaForm
                onSave={handleUpdatePizza}
                editingPizza={editingPizza}
              />
            </div>
          )}

      {/* If adding new pizza → show on page */}
          {showForm && !editingPizza && (
            <PizzaForm
              onSave={handleAddPizza}
              editingPizza={null}
            />
          )}

      {/* STEP 3: Pizza List */}
      <PizzaList pizzas={pizzas} onEdit={handleEditPizza}/>
      {/* TODO: later add onDelete for removing pizzas */}
    </div>
  );
}
