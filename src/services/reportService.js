import { API_BASE_URL, postJson, fetchJson } from "./apiSettings";

export const getReports = async () => {
  const response = await fetch(`${API_BASE_URL}/pizzas`);
  return response.json();
};

export const getCheeseReports = async () => {
  const response = await fetch(`${API_BASE_URL}/cheeses`);
  return response.json();
};

export const getToppingsReports = async () => {
  const response = await fetch(`${API_BASE_URL}/toppings`);
  return response.json();
};

export const getSaucesReports = async () => {
  const response = await fetch(`${API_BASE_URL}/sauces`);
  return response.json();
};

export const getSizesReports = async () => {
    const response = await fetch(`${API_BASE_URL}/sizes`)
    return response.json()
}
