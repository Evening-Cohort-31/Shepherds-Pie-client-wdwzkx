import "bootstrap/dist/css/bootstrap.min.css";
import "./PostItNote.css";
import { useState, useEffect, useMemo } from "react";
import { getAllEmployees } from "../../services/employeeService";

export const PostItNote = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getAllEmployees().then((data) => setEmployees(data));
  }, []);

  // Utilize useMemo to avoid expensive recalculating on every render
  // especially since employees list is unlikely to change frequently on login screen
  // We pick random admin and non-admin emails to display as test accounts for ease of testing
  // We could also accomplish this with useState and setting once after fetch, but useMemo keeps it more declarative
  const { adminEmail, nonAdminEmail } = useMemo(() => {
    const adminEmployees = employees.filter((emp) => emp.isAdmin);
    const nonAdminEmployees = employees.filter((emp) => !emp.isAdmin);

    const randomAdmin =
      adminEmployees.length > 0
        ? adminEmployees[Math.floor(Math.random() * adminEmployees.length)]
        : null;

    const randomNonAdmin =
      nonAdminEmployees.length > 0
        ? nonAdminEmployees[
            Math.floor(Math.random() * nonAdminEmployees.length)
          ]
        : null;

    return {
      adminEmail: randomAdmin?.email || "No admin found",
      nonAdminEmail: randomNonAdmin?.email || "No employee found",
    };
  }, [employees]);

  return (
    <div className="postItContainer">
      <div className="postIt">
        <p className="message">
          <strong>Test Accounts:</strong>
          <br />
          <br />
          <strong>Admin:</strong>
          <br />
          {adminEmail}
          <br />
          <br />
          <strong>Employee:</strong>
          <br />
          {nonAdminEmail}
        </p>
      </div>
      <div className="foldedCorner"></div>
    </div>
  );
};
