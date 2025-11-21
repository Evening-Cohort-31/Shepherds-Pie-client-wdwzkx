import "./MostPopularPizzas.css";

const getTopItems = (counts, limit) => {
    // Convert the object keys/values into an array of [key, value] pairs
    return Object.entries(counts)
        // Map the array into an array of objects for easier access
        .map(([name, count]) => ({ name, count}))

        // Sort the array in descending order
        .sort((a, b) => b.count - a.count)

        // Return on the first 'limit' number of items
        .slice(0, limit)
}

export const processPopularityData = (orders) => {
  const counts = {
    sizes: {},
    cheeseTypes: {},
    sauceTypes: {},
    toppings: {},
  };

  // Loop through the orders and the pizzas only ONCE

  for (const order of orders) {
    for (const pizza of pizzas) {
      // Increment all counters simultaneously within a single loop
      incrementSize(counts.sizes, pizza.size);
      incrementCheese(counts.cheeseTypes, pizza.cheese);
      incrementSauce(counts.sauceTypes, pizza.sauce);
      incrementToppings(counts.toppings, pizza.toppings);
    }
  }

  return {
    mostPopularSize: getTopItems(counts.sizes, 1)[0],
    mostPopularCheese: getTopItems(counts.cheeseTypes, 1)[0],
    mostPopularSauce: getTopItems(counts.sauceTypes, 1)[0],
    topThreeToppings: getTopItems(counts.toppings, 3),
  };
};

const incrementSize = (counts, size) => {
  counts[size] = (counts[size] || 0) + 1;
};

const incrementCheese = (counts, cheese) => {
  counts[cheese] = (counts[cheese] || 0) + 1;
};

const incrementSauce = (counts, sauce) => {
  counts[sauce] = (counts[sauce] || 0) + 1;
};

const incrementToppings = (counts, toppingsArray) => {
  for (const topping of toppingsArray) {
    counts[topping] = (counts[topping] || 0) + 1;
  }
};

export const byPopularChoice = async () => {
  // Fetch the data based on the date range
  const orders = await fetchOrders(dateRange);

  // Process the data
  const popularData = processPopularityData(orders);

  // Update the database.cache

  await updataPopularityInDatabase(popularData);

  return popularData;
};




// Finish creating the function to generate the charts with the data
// Next session load the view and check the function of the pie chart





/* Most popular size:
    For... of loop and increment the pizza sizes from each order
    The incremented data will be added to the data base
*/

/* Most popular cheese type
    For... of loop and increment the cheese types from each pizza from each order
    The incremented data will be added to the data base
    
*/

/* Most popular sauce type
    For... of loop and increment the sauce type from each pizza from each order
    The incremented data will be added to the data base

*/

/* Most popular toppings ( TOP 3 )
    For... of loop and increment the toppings from each pizza from each order
    The incremented data will be added to the data base

*/

/*
 There will be a button to initiate/reload the data for the popular selections.
*/

/*
Data Range Filter (Paginations) and a dropdown menu where the user can selection the date from a calendar.
*/
