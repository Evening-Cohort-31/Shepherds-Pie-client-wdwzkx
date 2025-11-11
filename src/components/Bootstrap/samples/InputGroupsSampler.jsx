import { Card, InputGroup, Form, Button } from "react-bootstrap";

export default function BootstrapInputGroupsSampler() {
  return (
    <>
      {/* 🔤 Input Groups */}
      <Card className="shadow-sm mb-4">
        <Card.Body>
          <Card.Title>Input Groups</Card.Title>
          <Card.Text>
            Combine inputs with buttons or text for search bars, quantity
            selectors, or price fields.
          </Card.Text>

          <InputGroup className="mb-3">
            <InputGroup.Text>@</InputGroup.Text>
            <Form.Control placeholder="Username" />
          </InputGroup>

          <InputGroup className="mb-3">
            <Form.Control placeholder="Search pizzas..." />
            <Button variant="primary">Search</Button>
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text>$</InputGroup.Text>
            <Form.Control type="number" placeholder="0.00" />
            <InputGroup.Text>.00</InputGroup.Text>
          </InputGroup>

          <InputGroup>
            <Button variant="outline-secondary">-</Button>
            <Form.Control
              type="number"
              defaultValue="1"
              className="text-center"
            />
            <Button variant="outline-secondary">+</Button>
          </InputGroup>

          <p className="text-muted small mt-3">
            💡 Tip: Mix and match <code>InputGroup.Text</code>, Form Controls,
            and Buttons for custom input experiences.
          </p>
        </Card.Body>
      </Card>
    </>
  );
}
