import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { EmployeeList } from "./components/employees/EmployeeList";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <EmployeeList />
  </React.StrictMode>
);
