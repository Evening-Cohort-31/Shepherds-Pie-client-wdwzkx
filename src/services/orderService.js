import { API_BASE_URL, postJson, fetchJson } from "./apiSettings";


export const getOrders = () => {
    return fetchJson("/orders?_expand=customer")
}

export const getOrderById = (orderId) => {
  return fetch(`http://localhost:8088/orders/${orderId}`).then((res) =>
    res.json()
  )
}