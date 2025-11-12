import { API_BASE_URL, postJson, fetchJson, putJson } from "./apiSettings";

export const getAllEmployees = async () => {
    return fetchJson("/employees");
};

export const addEmployee = async (employeeData) => {
    return postJson("/employees", employeeData);
};

export const updateEmployeeByEmployeeId = async (employeeId, employeeData) => {
    return putJson(`/employees/${employeeId}`, employeeData);
};