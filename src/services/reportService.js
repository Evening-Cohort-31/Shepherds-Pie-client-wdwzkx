import { API_BASE_URL, postJson, fetchJson } from "./apiSettings";

export const getReports = async () => {
  const response = await fetch(`${API_BASE_URL}/pizzas`);
  return response.json();
};

export const getToppingsReports = async () => {
  const response = await fetch(`${API_BASE_URL}/pizzaToppings`);
  return response.json();
};
