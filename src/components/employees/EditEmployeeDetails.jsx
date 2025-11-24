import "./EditEmployeeDetails.css";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Form, Button, Card, Container } from "react-bootstrap";
import {
  getEmployeeByEmployeeId,
  updateEmployeeByEmployeeId,
} from "../../services/employeeService.js";

export const EditEmployeeDetails = () => {
  // Get employeeId from URL parameters
  const { employeeId } = useParams();

  const navigate = useNavigate();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    // Async function to load employee data since useEffect callback cannot be async
    async function loadEmployee() {
      const EmployeeData = await getEmployeeByEmployeeId(employeeId);
      setEmployee(EmployeeData);
    }

    // Run the async function to load employee data
    loadEmployee();
  }, [employeeId]);

  // Show loading state if employee data is not yet available
  if (!employee) return <div>Loading...</div>;

  // Update field in local state only
  const updateField = (field, value) => {
    // Update the specific field in the employee state
    setEmployee((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (submissionEvent) => {
    // Prevent form from refreshing the page after submission
    submissionEvent.preventDefault();
    // Send updated employee data to the API
    await updateEmployeeByEmployeeId(employee.id, employee);
    // Navigate back to the employee details view
    navigate(`/employees/${employee.id}`);
  };

  return (
    <Container className="my-5">
      <Card className="p-4 shadow-lg bg-shepherd-white-soft">
        <h2 className="mb-4 text-center fw-bold">Edit Employee Details</h2>

        <Form onSubmit={handleSubmit}>
          {/* First Name */}
          <Form.Group className="mb-3">
            <Form.Label className="form-label-enhanced">First Name</Form.Label>
            <Form.Control
              className="form-control-glow"
              type="text"
              value={employee.firstName}
              onChange={(e) => updateField("firstName", e.target.value)}
            />
          </Form.Group>

          {/* Last Name */}
          <Form.Group className="mb-3">
            <Form.Label className="form-label-enhanced">Last Name</Form.Label>
            <Form.Control
              className="form-control-glow"
              type="text"
              value={employee.lastName}
              onChange={(e) => updateField("lastName", e.target.value)}
            />
          </Form.Group>

          {/* Email */}
          <Form.Group className="mb-3">
            <Form.Label className="form-label-enhanced">Email</Form.Label>
            <Form.Control
              className="form-control-glow"
              type="email"
              value={employee.email}
              onChange={(e) => updateField("email", e.target.value)}
            />
          </Form.Group>

          {/* Phone */}
          <Form.Group className="mb-3">
            <Form.Label className="form-label-enhanced">Phone</Form.Label>
            <Form.Control
              className="form-control-glow"
              type="text"
              value={employee.phone}
              onChange={(e) => updateField("phone", e.target.value)}
            />
          </Form.Group>

          {/* Job Title */}
          <Form.Group className="mb-3">
            <Form.Label className="form-label-enhanced">Job Title</Form.Label>
            <Form.Control
              className="form-control-glow"
              type="text"
              value={employee.jobTitle}
              onChange={(e) => updateField("jobTitle", e.target.value)}
            />
          </Form.Group>

          {/* Hire Date */}
          <Form.Group className="mb-3">
            <Form.Label className="form-label-enhanced">Hire Date</Form.Label>
            <Form.Control
              className="form-control-glow"
              type="date"
              value={employee.hireDate}
              onChange={(e) => updateField("hireDate", e.target.value)}
            />
          </Form.Group>

          {/* Employment Status */}
          <Form.Group className="mb-3">
            <Form.Label className="form-label-enhanced">
              Employment Status
            </Form.Label>
            <Form.Select
              className="form-select-glow"
              value={employee.employmentType}
              onChange={(e) => updateField("employmentType", e.target.value)}
            >
              <option value="active">Active</option>
              <option value="former">Former</option>
            </Form.Select>
          </Form.Group>

          {/* Employment End Date (optional) */}
          {employee.employmentType === "former" && (
            <Form.Group className="mb-3">
              <Form.Label className="form-label-enhanced">
                Employment End Date
              </Form.Label>
              <Form.Control
                className="form-control-glow"
                type="date"
                value={employee.employmentEndDate || ""}
                onChange={(e) =>
                  updateField("employmentEndDate", e.target.value)
                }
              />
            </Form.Group>
          )}

          {/* Is Admin */}
          <Form.Group className="mb-4">
            <Form.Check
              type="checkbox"
              label="Administrator"
              checked={employee.isAdmin}
              onChange={(e) => updateField("isAdmin", e.target.checked)}
            />
          </Form.Group>

          <div className="d-flex justify-content-between">
            <Button type="submit" variant="primary">
              Save Changes
            </Button>

            <Button
              variant="secondary"
              onClick={() => navigate(`/employees/${employee.id}`)}
            >
              Cancel
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
};
