import { Card, Breadcrumb } from "react-bootstrap";

export default function BootstrapBreadcrumbsSampler() {
  return (
    <>
      {/* 🗺️ Breadcrumb Navigation */}
      <Card className="shadow-sm mb-4">
        <Card.Body>
          <Card.Title>Breadcrumb Navigation</Card.Title>
          <Card.Text>
            Breadcrumbs show navigation hierarchy. Great for multi-level pages
            like Orders {">"} Order Details {">"} Edit.
          </Card.Text>

          <Breadcrumb>
            <Breadcrumb.Item href="#home">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="#orders">Orders</Breadcrumb.Item>
            <Breadcrumb.Item active>Order #1234</Breadcrumb.Item>
          </Breadcrumb>

          <Breadcrumb>
            <Breadcrumb.Item href="#menu">Menu</Breadcrumb.Item>
            <Breadcrumb.Item href="#pizzas">Pizzas</Breadcrumb.Item>
            <Breadcrumb.Item active>Create New</Breadcrumb.Item>
          </Breadcrumb>

          <p className="text-muted small mt-3">
            💡 Tip: Set <code>active</code> on the current page item to disable
            the link and style it differently.
          </p>
        </Card.Body>
      </Card>
    </>
  );
}
