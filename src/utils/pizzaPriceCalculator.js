// src/utils/pizzaPriceCalculator.js
export function calculatePizzaPrice(pizza, options) {
  if (!options || !options.sizes?.length) return 0;

  let price = 0;

  // Base price comes from the selected size
  const size = options.sizes.find((s) => s.id === pizza.sizeId);
  if (size) {
    price += size.base_price;
  }


  // Up charges come from selected toppings
  if (pizza.toppings?.length && options.toppings?.length) {
    pizza.toppings.forEach((toppingId) => {
      const topping = options.toppings.find((t) => t.id === toppingId);
      if (topping) {
        price += topping.price;
      }
    });
  }

  // Round to 2 decimals for display
  return parseFloat(price.toFixed(2));
}
