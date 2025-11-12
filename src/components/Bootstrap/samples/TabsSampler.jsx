import { Card, Tabs, Tab, ListGroup } from "react-bootstrap";

export default function BootstrapTabsSampler() {
  return (
    <>
      {/* 📑 Tabs Example */}
      <Card className="shadow-sm mb-4">
        <Card.Body>
          <Card.Title>Tabs</Card.Title>
          <Card.Text>
            Tabs organize content into sections. Perfect for order history by
            status, different menu categories, or settings pages.
          </Card.Text>

          <Tabs defaultActiveKey="pending" id="order-tabs" className="mb-3">
            <Tab eventKey="pending" title="Pending">
              <div className="p-3 border border-top-0 rounded-bottom">
                <h6>Pending Orders</h6>
                <ListGroup variant="flush">
                  <ListGroup.Item>Order #1001 - Large Pepperoni</ListGroup.Item>
                  <ListGroup.Item>Order #1002 - Medium Veggie</ListGroup.Item>
                </ListGroup>
              </div>
            </Tab>
            <Tab eventKey="preparing" title="Preparing">
              <div className="p-3 border border-top-0 rounded-bottom">
                <h6>Orders Being Prepared</h6>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    Order #0998 - Small Margherita
                  </ListGroup.Item>
                </ListGroup>
              </div>
            </Tab>
            <Tab eventKey="completed" title="Completed">
              <div className="p-3 border border-top-0 rounded-bottom">
                <h6>Completed Orders</h6>
                <ListGroup variant="flush">
                  <ListGroup.Item>Order #0997 - Large Supreme</ListGroup.Item>
                  <ListGroup.Item>Order #0996 - Medium Hawaiian</ListGroup.Item>
                </ListGroup>
              </div>
            </Tab>
          </Tabs>

          <p className="text-muted small">
            💡 Tip: Control active tab with <code>activeKey</code> and{" "}
            <code>onSelect</code> props. Try <code>variant="pills"</code> for a
            different look.
          </p>
        </Card.Body>
      </Card>
    </>
  );
}
