import { Card, Form, Button } from "react-bootstrap";

export default function BootstrapFormCardSampler() {
  return (
    <>
      <Card className="mb-4 shadow-sm">
        <Card.Body>
          <Card.Title>Form Elements</Card.Title>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Favorite Pizza Size</Form.Label>
              <Form.Select>
                <option>Choose size...</option>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Subscribe to pizza news" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}
