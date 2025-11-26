// This Provider component wraps our entire app and manages the currentEmployee state.
// When the app loads, it checks localStorage for a logged-in employee and fetches their full data from the API.
// It provides both currentEmployee (the data) and setCurrentEmployee (to update it) to all child components.
// This runs automatically on app load and whenever someone logs in/out.

import { useState, useEffect } from "react";
import { CurrentEmployeeContext } from "./CurrentEmployeeContext.js";
import { getEmployeeByEmployeeId } from "../services/employeeService.js";

export const CurrentEmployeeProvider = ({ children }) => {
  const [currentEmployee, setCurrentEmployee] = useState(null);

  useEffect(() => {
    const localEmployee = localStorage.getItem("shepards_pies_employee");
    if (localEmployee) {
      const employeeObject = JSON.parse(localEmployee);
      getEmployeeByEmployeeId(employeeObject.id)
        .then((employee) => {
          setCurrentEmployee(employee);
        })
        .catch((error) => {
          console.error("Failed to fetch employee:", error);
          localStorage.removeItem("shepards_pies_employee");
        });
    }
  }, []);

  return (
    <CurrentEmployeeContext.Provider
      value={{ currentEmployee, setCurrentEmployee }}
    >
      {children}
    </CurrentEmployeeContext.Provider>
  );
};
