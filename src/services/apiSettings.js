export const API_BASE_URL = "http://localhost:8088";

/**
 * Generic helper function for fetching JSON data from the API.
 *
 * Example usage:
 * ------------------------------------------------
 * // 1️⃣ Fetch all customers
 * const customers = await fetchJson("/customers");
 *
 * // 2️⃣ Fetch all orders and expand related customer data
 * const orders = await fetchJson("/orders?_expand=customer");
 *
 * // 3️⃣ Fetch a single pizza by ID
 * const pizza = await fetchJson("/pizzas/5");
 * ------------------------------------------------
 */

export const fetchJson = async (endpoint, options = {}) => {
    // Combine the base URL and endpoint to form the full request URL
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        // Default to sending JSON headers; allow overrides via `options`
        headers: { "Content-Type": "application/json" },
        ...options
    });
    // Check if the request was successful (status 200–299)
    if (!response.ok) {
        // Throw an error if the response failed, including HTTP status details
        throw new Error(`Fetch failed: ${response.status} ${response.statusText}`);
    }

    // Parse and return the JSON body of the response
    return response.json();
};

/**
 * Helper function to POST JSON data to the API.
 *
 * Example usage:
 * ------------------------------------------------
 * // 1️⃣ Add a new customer
 * const newCustomer = await postJson("/customers", {
 *   first_name: "Alex",
 *   last_name: "Rivera",
 *   phone: "555-9090"
 * });
 *
 * // 2️⃣ Add a new order
 * const newOrder = await postJson("/orders", {
 *   customer_id: 1,
 *   order_type: "delivery",
 *   delivery_address: "123 Elm Street",
 *   total_amount: 22.75,
 *   status: "in-progress"
 * });
 *
 * // 3️⃣ Add a new pizza to an order
 * const newPizza = await postJson("/pizzas", {
 *   order_id: 2,
 *   size: "Medium",
 *   cheese_type: "Mozzarella",
 *   sauce_type: "Marinara",
 *   price: 12.50
 * });
 * ------------------------------------------------
 */


// helper function to POST new JSON data to the API
export const postJson = async (endpoint, data) => {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: "POST",                     // Specify HTTP method
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)          // Convert JS object to JSON string
    });

    // Handle response the same way as in fetchJson
    if (!response.ok) {
        throw new Error(`POST failed: ${response.status} ${response.statusText}`);
    }

    return response.json();
};

// helper function to PUT (update) JSON data to the API
export const putJson = async (endpoint, data) => {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: "PUT",                      // Specify HTTP method
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)          // Convert JS object to JSON string
    });

    // Handle response the same way as in fetchJson
    if (!response.ok) {
        throw new Error(`PUT failed: ${response.status} ${response.statusText}`);
    }

    return response.json();
};