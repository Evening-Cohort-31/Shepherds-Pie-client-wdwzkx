import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button, Card } from "react-bootstrap";
import { getEmployeeByEmail } from "../../services/employeeService";
import { useCurrentEmployee } from "../../context/CurrentEmployeeContext.js";

export const EmployeeLogin = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const { setCurrentEmployee } = useCurrentEmployee();

  const handleLogin = (e) => {
    e.preventDefault();

    return getEmployeeByEmail(email).then((foundEmployees) => {
      if (foundEmployees.length === 1) {
        const employee = foundEmployees[0];
        localStorage.setItem(
          "shepards_pies_employee",
          JSON.stringify({
            id: employee.id,
          })
        );

        // Update context with full employee object
        setCurrentEmployee(employee);

        navigate("/");
      } else {
        window.alert("Invalid login - Employee not found");
      }
    });
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <Card style={{ width: "400px" }} className="shadow">
        <Card.Body className="p-4">
          <h1 className="text-center mb-2">🍕 Shepard's Pies 🍕</h1>
          <h5 className="text-center text-muted mb-4">Employee Portal</h5>

          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(evt) => setEmail(evt.target.value)}
                placeholder="Enter your employee email"
                required
                autoFocus
              />
            </Form.Group>

            <div className="d-grid">
              <Button variant="primary" type="submit" size="lg">
                Sign In
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};
