// This shows all of the pizzas that have been added to the order. 
// TODO: Post/patch data in our api database
// TODO: Ability to delete pizzas
import "./PizzaBuilder.css";
export const PizzaList = ({ pizzas, onEdit }) => {
  if (!pizzas || pizzas.length === 0) {
    return <p className="mt-4 text-gray-500">No pizzas in this order yet.</p>;
  }

  return (
    <div className="pizza-list-box">
      <h3 className="pizza-list h2">Pizzas in this order</h3>
      <ul className="pizza-list">
        {pizzas.map((p) => (
          <li
            key={p.id}
            className="flex justify-between items-center px-3 py-2 hover:bg-gray-50"
          >
            <div>
              <p className="pizza-name">Pizza #{p.id}</p>
              <p className="pizza-details">
                Size: {p.sizeId}, Cheese: {p.cheeseId}, Sauce: {p.sauceId}
              </p>
              <p className="pizza-details">
                Total: {p.price}
              </p>
                {/* TODO: display Names (getNamebyID) for each of these, instead of just ID) */}
            </div>

              <button
                onClick={() => onEdit(p)}
                className="edit-button"
              >
                Edit
              </button >
              
          </li>
        ))}
      </ul>
    </div>
  );
}
