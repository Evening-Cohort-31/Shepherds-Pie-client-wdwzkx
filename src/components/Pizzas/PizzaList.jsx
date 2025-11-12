// This shows all of the pizzas that have been added to the order. 
// TODO: Post/patch data in our api database
// TODO: Ability to delete pizzas

export const PizzaList = ({ pizzas, onEdit }) => {
  if (!pizzas || pizzas.length === 0) {
    return <p className="mt-4 text-gray-500">No pizzas in this order yet.</p>;
  }

  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-2">Pizzas in this order</h3>
      <ul className="divide-y divide-gray-200 border rounded-md">
        {pizzas.map((p) => (
          <li
            key={p.id}
            className="flex justify-between items-center px-3 py-2 hover:bg-gray-50"
          >
            <div>
              <p className="font-medium">Pizza #{p.id}</p>
              <p className="text-sm text-gray-600">
                Size: {p.sizeId}, Cheese: {p.cheeseId}, Sauce: {p.sauceId}
                {/* TODO: display Names (getNamebyID) for each of these, instead of just ID) */}
              </p>
            </div>

              <button
                onClick={() => onEdit(p)}
                className="bg-yellow-400 hover:bg-yellow-500 text-sm px-3 py-1 rounded"
              >
                Edit
              </button >
              
          </li>
        ))}
      </ul>
    </div>
  );
}
