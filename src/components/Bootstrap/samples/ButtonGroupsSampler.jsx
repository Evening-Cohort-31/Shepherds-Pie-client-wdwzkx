import { Card, ButtonGroup, Button } from "react-bootstrap";

export default function BootstrapButtonGroupsSampler() {
  return (
    <>
      {/* 🔘 Button Groups */}
      <Card className="shadow-sm mb-4">
        <Card.Body>
          <Card.Title>Button Groups</Card.Title>
          <Card.Text>
            Group related actions together. Great for toolbars, size selectors,
            or toggle options.
          </Card.Text>

          <ButtonGroup className="mb-3" aria-label="Pizza size selector">
            <Button variant="outline-primary">Small</Button>
            <Button variant="outline-primary">Medium</Button>
            <Button variant="outline-primary">Large</Button>
          </ButtonGroup>

          <div className="mb-3">
            <ButtonGroup aria-label="Text formatting">
              <Button variant="secondary">Bold</Button>
              <Button variant="secondary">Italic</Button>
              <Button variant="secondary">Underline</Button>
            </ButtonGroup>
          </div>

          <ButtonGroup vertical>
            <Button variant="light">Edit</Button>
            <Button variant="light">View</Button>
            <Button variant="light">Delete</Button>
          </ButtonGroup>

          <p className="text-muted small mt-3">
            💡 Tip: Use <code>vertical</code> prop to stack buttons. Add{" "}
            <code>size="sm"</code> or <code>"lg"</code> to the ButtonGroup for
            uniform sizing.
          </p>
        </Card.Body>
      </Card>
    </>
  );
}
