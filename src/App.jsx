import "./App.css";
import { Routes, Route } from "react-router-dom";
import { EmployeeLogin } from "./components/auth/Login.jsx";
import { ApplicationViews } from "./views/ApplicationViews.jsx";
import { Authorized } from "./views/Authorized.jsx";
import { CurrentEmployeeProvider } from "./context/CurrentEmployeeProvider.jsx";

export const App = () => {
  return (
    <CurrentEmployeeProvider>
      <Routes>
        <Route path="/login" element={<EmployeeLogin />} />
        <Route
          path="*"
          element={
            <Authorized>
              {/* Pass the currentEmployee as a prop to ApplicationViews */}
              <ApplicationViews />
            </Authorized>
          }
        />
      </Routes>
    </CurrentEmployeeProvider>
  );
};
