import "./App.css";
import { Routes, Route } from "react-router-dom";
import { EmployeeLogin } from "./components/auth/Login.jsx";
import { ApplicationViews } from "./views/ApplicationViews.jsx";
import { Authorized } from "./views/Authorized.jsx";
import { useEffect, useState } from "react";
import { getEmployeeById } from "./services/employeeService.js";

export const App = () => {
  // state to hold the current logged-in employee
  const [currentEmployee, setCurrentEmployee] = useState(null);

  useEffect(() => {
    const localUser = localStorage.getItem("shepards_pies_employee");
    if (localUser) {
      const employeeObject = JSON.parse(localUser);
      getEmployeeById(employeeObject.id).then((employee) => {
        setCurrentEmployee(employee);
      });
    }
  }, []);

  return (
    <Routes>
      <Route path="/login" element={<EmployeeLogin />} />
      <Route
        path="*"
        element={
          <Authorized>
            {/* Pass the currentEmployee as a prop to ApplicationViews */}
            <ApplicationViews currentEmployee={currentEmployee} />
          </Authorized>
        }
      />
    </Routes>
  );
};
