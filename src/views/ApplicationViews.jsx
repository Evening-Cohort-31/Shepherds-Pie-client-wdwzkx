import { Routes, Route, Navigate } from "react-router-dom";
import { EmployeeList } from "../components/employees/EmployeeList.jsx";
import { PizzaOrderBuilder } from "../components/Pizzas/PizzaOrderBuilder.jsx";
import BootstrapSampler from "../components/Bootstrap/BootstrapSampler.jsx";
import { useCurrentEmployee } from "../context/CurrentEmployeeContext.js";
// import { MonthlySalesReport } from "../components/reports/MonthlySalesReport";
// use employee email to login joe.giuseppe@perfectslice.com or any from database

export const ApplicationViews = () => {
  const { currentEmployee } = useCurrentEmployee();

  // Wait for currentEmployee to load before rendering routes
  if (currentEmployee === null) {
    return <div>Loading...</div>;
  }

  return (
    <Routes>
      <Route path="/" element={<PizzaOrderBuilder />} />
      <Route path="/bootstrap" element={<BootstrapSampler />} />

      {/* Route only accessible by admin employees */}
      <Route
        path="/employees"
        element={
          currentEmployee.isAdmin ? (
            <EmployeeList />
          ) : (
            <Navigate to="/" replace />
          )
        }
      />
      {/* add other routes here as needed like the example below */}
      {/* <Route path="/reports" element={<MonthlySalesReport />} /> */}
    </Routes>
  );
};
