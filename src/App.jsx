import "./App.css";
import BootstrapSampler from "./components/Bootstrap/BootstrapSampler.jsx";
import { PizzaOrderBuilder } from "./components/Pizzas/PizzaOrderBuilder.jsx";
import { EmployeeList } from "./components/employees/EmployeeList.jsx";

export const App = () => {
  return (
    <>
      {/* <PizzaOrderBuilder /> */}
      {/* <BootstrapSampler /> */}
      <EmployeeList />
    </>
  );
};
