import { Navigate, Outlet } from "react-router-dom";

// Functional component to protect admin routes
export default function AdminRoute({ currentEmployee }) {
  // Check if the current employee is an admin or not
  if (!currentEmployee?.isAdmin) {
    // In the case they are not admin, redirect them to the home page
    // the replace prop prevents adding a new entry to the history stack
    return <Navigate to="/" replace />;
  }

  // If the user is an admin, render the child routes
  return <Outlet />;
}
