import { Card, Badge, Button } from "react-bootstrap";

export default function BootstrapBadgesSampler() {
  return (
    <>
      {/* 🏷️ Badge Examples */}
      <Card className="shadow-sm mb-4">
        <Card.Body>
          <Card.Title>Badge Examples</Card.Title>
          <Card.Text>
            Badges are perfect for notification counts, status labels, or
            highlighting new features. Use <code>bg</code> prop to change
            colors.
          </Card.Text>

          <div className="mb-3">
            <h5>
              Orders <Badge bg="primary">12</Badge>
            </h5>
            <h5>
              Pending{" "}
              <Badge bg="warning" text="dark">
                3
              </Badge>
            </h5>
            <h5>
              Completed <Badge bg="success">9</Badge>
            </h5>
          </div>

          <div className="d-flex flex-wrap gap-2">
            <Button variant="secondary">
              Notifications <Badge bg="danger">4</Badge>
            </Button>
            <span className="d-inline-block">
              Status: <Badge bg="info">Active</Badge>
            </span>
            <span className="d-inline-block">
              New!{" "}
              <Badge pill bg="success">
                Beta
              </Badge>
            </span>
          </div>

          <p className="text-muted small mt-3">
            💡 Tip: Use <code>pill</code> prop for rounded badges, and{" "}
            <code>text="dark"</code> for better contrast on light backgrounds.
          </p>
        </Card.Body>
      </Card>
    </>
  );
}
