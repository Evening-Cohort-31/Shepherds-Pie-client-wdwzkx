import { Card, Button } from "react-bootstrap";

export default function BootstrapButtonCardSampler() {
  return (
    <>
      <Card className="mb-4 shadow-sm">
        <Card.Body>
          <Card.Title>Button Examples</Card.Title>
          <Card.Text>
            Try different <code>variant</code> props like <code>"primary"</code>
            , <code>"success"</code>, or <code>"outline-secondary"</code>.
          </Card.Text>
          <div className="d-flex flex-wrap gap-2">
            <Button variant="primary">Primary</Button>
            <Button variant="success">Success</Button>
            <Button variant="outline-danger">Outline</Button>
            <Button variant="warning" size="sm">
              Small
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
