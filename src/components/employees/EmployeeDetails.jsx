import "./EmployeeDetails.css";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, Badge, Button, Container, Row, Col } from "react-bootstrap";
import { getEmployeeByEmployeeId } from "../../services/employeeService.js";

export const EmployeeDetails = ({ currentEmployee }) => {
  const { employeeId } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getEmployeeByEmployeeId(employeeId);
      setEmployee(data);
    }
    fetchData();
  }, [employeeId]);

  if (!employee) return <div>Loading...</div>;

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card
            className="bg-shepherd-dark text-white shadow-lg"
            style={{ borderRadius: "12px" }}
          >
            <Card.Body>
              {/* Name & Admin badge */}
              <Card.Title className="mb-3">
                Employee Name: {employee.firstName} {employee.lastName}
                <Badge className="badge-jobtitle ms-2">
                  {employee.jobTitle}
                </Badge>
                {employee.isAdmin && (
                  <Badge bg="warning" text="dark" className="ms-2">
                    Admin
                  </Badge>
                )}
              </Card.Title>

              {/* Info Section */}
              <div className="mb-4">
                <div className="mb-2">
                  <strong>Job Title:</strong> {employee.jobTitle}
                </div>

                <div className="mb-2">
                  <strong>Administrator:</strong>{" "}
                  {employee.isAdmin ? "Yes" : "No"}
                </div>

                <div className="mb-2">
                  <strong>Email:</strong> {employee.email}
                </div>

                <div className="mb-2">
                  <strong>Phone:</strong> {employee.phone}
                </div>

                <div className="mb-2">
                  <strong>Hire Date:</strong>{" "}
                  {new Date(employee.hireDate).toLocaleDateString()}
                </div>

                <div className="mb-2">
                  <strong>Employment Status:</strong>{" "}
                  <Badge
                    bg={
                      employee.employmentType === "active"
                        ? "success"
                        : "secondary"
                    }
                  >
                    {employee.employmentType === "active" ? "Active" : "Former"}
                  </Badge>
                </div>

                {employee.employmentEndDate && (
                  <div className="mb-2">
                    <strong>Employment End Date:</strong>{" "}
                    {new Date(employee.employmentEndDate).toLocaleDateString()}
                  </div>
                )}
              </div>

              {/* Buttons */}
              <div className="d-grid gap-2 mt-4">
                <Button
                  as={Link}
                  to={`/employees/${employee.id}/edit`}
                  variant="primary"
                  size="sm"
                  disabled={!currentEmployee.isAdmin}
                >
                  Edit Profile
                </Button>

                <Button
                  as={Link}
                  to="/employees"
                  variant="outline-light"
                  size="sm"
                >
                  Back to Employee List
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
