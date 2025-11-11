import { Card, Dropdown } from "react-bootstrap";

export default function BootstrapDropdownSampler() {
  return (
    <>
      {/* 📋 Dropdown Menus */}
      <Card className="shadow-sm mb-4">
        <Card.Body>
          <Card.Title>Dropdown Menus</Card.Title>
          <Card.Text>
            Dropdowns provide action menus or filter options. Use{" "}
            <code>variant</code> to style the toggle button.
          </Card.Text>

          <div className="d-flex flex-wrap gap-2 mb-3">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Order Actions
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#view">View Details</Dropdown.Item>
                <Dropdown.Item href="#edit">Edit Order</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#cancel" className="text-danger">
                  Cancel Order
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown>
              <Dropdown.Toggle variant="outline-secondary" id="dropdown-filter">
                Filter By
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Header>Pizza Size</Dropdown.Header>
                <Dropdown.Item href="#small">Small</Dropdown.Item>
                <Dropdown.Item href="#medium">Medium</Dropdown.Item>
                <Dropdown.Item href="#large">Large</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#all">Show All</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <p className="text-muted small">
            💡 Tip: Use <code>Dropdown.Divider</code> to separate sections, and{" "}
            <code>Dropdown.Header</code> for category labels. Try{" "}
            <code>drop="up"</code> or <code>"end"</code> to change direction.
          </p>
        </Card.Body>
      </Card>
    </>
  );
}
