import { API_BASE_URL, postJson, fetchJson } from "./apiSettings";


export const getPizzaSauceOptions = () => {
  return fetch("http://localhost:8088/sauces")
    .then(res => res.json())
}


export const getPizzaCheeseOptions = () => {
    return fetch("http://localhost:8088/cheeses")
    .then(res => res.json())
}

export const getPizzaSizesOptions = () => {
    return fetch("http://localhost:8088/sizes").then(res => res.json())
}

export const getPizzaToppingOptions = () => {
  return fetch("http://localhost:8088/toppings")
    .then((res) => res.json());
}