import { API_BASE_URL, postJson, fetchJson } from "./apiSettings";


export const getOrders = () => {
    return fetchJson("/orders?_expand=customer")
}
