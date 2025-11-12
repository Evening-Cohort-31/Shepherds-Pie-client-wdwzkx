import "./App.css";
import BootstrapSampler from "./components/Bootstrap/BootstrapSampler.jsx";
import { OrderList } from "./components/orders/OrderList.jsx";
import { PizzaOrderBuilder } from "./components/Pizzas/PizzaOrderBuilder.jsx";

export const App = () => {
  return (
    <>
      {/* <PizzaOrderBuilder /> */}
      <BootstrapSampler />
      <OrderList />
    </>
  );
};
