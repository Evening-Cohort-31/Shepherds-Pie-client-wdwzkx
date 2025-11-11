import { Card, ListGroup } from "react-bootstrap";

export default function BootstrapListGroupSampler() {
  return (
    <>
      {/* 📝 ListGroup Example */}
      <Card className="shadow-sm mb-4">
        <Card.Body>
          <Card.Title>List Groups</Card.Title>
          <Card.Text>
            Display lists of menu items, orders, or navigation links. ListGroup
            is highly versatile!
          </Card.Text>

          <ListGroup className="mb-3">
            <ListGroup.Item active>Active Order</ListGroup.Item>
            <ListGroup.Item>Pepperoni Pizza - $12.99</ListGroup.Item>
            <ListGroup.Item>Garlic Bread - $4.99</ListGroup.Item>
            <ListGroup.Item disabled>Sold Out Item</ListGroup.Item>
          </ListGroup>

          <ListGroup variant="flush">
            <ListGroup.Item action href="#link1">
              Clickable Item
            </ListGroup.Item>
            <ListGroup.Item action href="#link2">
              Another Link
            </ListGroup.Item>
          </ListGroup>

          <p className="text-muted small mt-3">
            💡 Tip: Use <code>variant="flush"</code> to remove borders, or{" "}
            <code>action</code> to make items clickable/hoverable.
          </p>
        </Card.Body>
      </Card>
    </>
  );
}
