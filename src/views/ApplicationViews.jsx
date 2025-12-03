import { Routes, Route, Navigate } from "react-router-dom";
import { EmployeeList } from "../components/employees/EmployeeList.jsx";
import { EmployeeDetails } from "../components/employees/EmployeeDetails.jsx";
import { EditEmployeeDetails } from "../components/employees/EditEmployeeDetails.jsx";
import { PizzaOrderBuilder } from "../components/Pizzas/PizzaOrderBuilder.jsx";
import BootstrapSampler from "../components/Bootstrap/BootstrapSampler.jsx";
import { useCurrentEmployee } from "../context/CurrentEmployeeContext.js";
import { OrderList } from "../components/orders/OrderList.jsx";
import AdminRoute from "../routes/AdminRoute.jsx";
import AccessDenied from "../components/accessdenied/AccessDenied.jsx";
import { NavBar } from "../components/NavBar/NavBar.jsx";
import { Outlet } from "react-router-dom";
import { MonthlySalesReport } from "../components/Reports/MonthlySalesReport.jsx";
import { Footer } from "../components/Footer/Footer.jsx";
import "./AppLayout.css";
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
      <Route
        path="/"
        element={
          <div className="app-layout">
            <NavBar />
            <main className="app-main">
              <Outlet />
            </main>
            <Footer />
          </div>
        }
      >
        <Route path="/" element={<PizzaOrderBuilder />} />
        <Route path="/bootstrap" element={<BootstrapSampler />} />
        <Route path="/orderlist" element={<OrderList />} />
        <Route path="/salesreports" element={<MonthlySalesReport />} />
        <Route path="/access-denied" element={<AccessDenied />} />

        {/* Route only accessible by admin employees */}
        <Route
          path="/employees"
          element={<AdminRoute currentEmployee={currentEmployee} />}
        >
          <Route
            index
            element={<EmployeeList currentEmployee={currentEmployee} />}
          />
          <Route
            path=":employeeId"
            element={<EmployeeDetails currentEmployee={currentEmployee} />}
          />
          <Route
            path=":employeeId/edit"
            element={<EditEmployeeDetails currentEmployee={currentEmployee} />}
          />
        </Route>

        {/* add other routes here as needed like the example below */}
        {/* <Route path="/reports" element={<MonthlySalesReport />} /> */}
      </Route>
    </Routes>
  );
};
