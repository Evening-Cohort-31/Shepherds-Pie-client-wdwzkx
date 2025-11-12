import {
  Container,
  Card,
  Badge,
  Col,
  Row,
  Button,
  Form,
} from "react-bootstrap";
import {
  getAllEmployees,
  updateEmployeeByEmployeeId,
} from "../../services/employeeService.js";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchEmployees = async () => {
      const employeeData = await getAllEmployees();
      setEmployees(employeeData);
    };

    fetchEmployees();
  }, []);

  // Filter employees based on search term
  const filteredEmployees = employees.filter((employee) => {
    const fullName = `${employee.firstName} ${employee.lastName}`.toLowerCase();
    return fullName.includes(searchTerm.toLowerCase());
  });

  return (
    <Container className="py-4">
      <h2 className="mb-4">Employee List</h2>

      {/* Search Field */}
      <Form.Control
        type="text"
        placeholder="Search by first or last name..."
        className="mb-4"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />

      {/* Employee Cards */}
      <Row xs={1} md={2} lg={3} className="g-4">
        {filteredEmployees
          .sort((a, b) => {
            // Active employees come first
            if (a.employmentType === "active" && b.employmentType !== "active")
              return -1;
            if (a.employmentType !== "active" && b.employmentType === "active")
              return 1;
            return 0;
          })
          .map((employee) => (
            <Col key={employee.id}>
              <Card
                className="h-100 bg-dark text-white shadow-sm"
                style={{ transition: "transform 0.2s" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-5px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                <Card.Body className="d-flex flex-column">
                  <Card.Title>
                    {employee.firstName} {employee.lastName}
                    {employee.isAdmin && (
                      <Badge bg="warning" text="dark" className="ms-2">
                        Admin
                      </Badge>
                    )}
                  </Card.Title>

                  <Card.Subtitle className="mb-3 text-warning">
                    {employee.jobTitle}
                  </Card.Subtitle>

                  <div className="mb-3">
                    <div className="mb-1">
                      <strong>Email:</strong> {employee.email}
                    </div>
                    <div className="mb-1">
                      <strong>Phone:</strong> {employee.phone}
                    </div>
                    <div>
                      <strong>Status:</strong>{" "}
                      <Badge
                        bg={
                          employee.employmentType === "active"
                            ? "success"
                            : "secondary"
                        }
                      >
                        {employee.employmentType === "active"
                          ? "Active"
                          : "Former"}
                      </Badge>
                    </div>
                  </div>

                  <div className="mt-auto d-grid gap-2">
                    <Button
                      variant={employee.isAdmin ? "danger" : "success"}
                      size="sm"
                      onClick={async () => {
                        await updateEmployeeByEmployeeId(employee.id, {
                          ...employee,
                          isAdmin: !employee.isAdmin,
                        });
                        const updatedEmployees = await getAllEmployees();
                        setEmployees(updatedEmployees);
                      }}
                    >
                      {employee.isAdmin ? "Revoke Admin" : "Make Admin"}
                    </Button>

                    <Button variant="primary" size="sm" disabled>
                      Edit Profile
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
};
