import {
  Card,
  OverlayTrigger,
  Button,
  Popover,
  Tooltip,
} from "react-bootstrap";

export default function BootstrapTooltipPopoverSampler() {
  return (
    <>
      {" "}
      {/* 💬 Tooltips and Popovers */}
      <Card className="shadow-sm mb-4">
        <Card.Body>
          <Card.Title>Tooltips & Popovers</Card.Title>
          <Card.Text>
            Add helpful hints with Tooltips (on hover) or more detailed info
            with Popovers (on click). Both use OverlayTrigger.
          </Card.Text>

          <div className="d-flex flex-wrap gap-3 mb-3">
            {/* Tooltip Example */}
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>This is a helpful tooltip!</Tooltip>}
            >
              <Button variant="info">Hover for Tooltip</Button>
            </OverlayTrigger>

            {/* Popover Example */}
            <OverlayTrigger
              trigger="click"
              placement="right"
              overlay={
                <Popover id="popover-basic">
                  <Popover.Header as="h3">Order Info</Popover.Header>
                  <Popover.Body>
                    This popover can contain more detailed information,
                    instructions, or even small forms.
                  </Popover.Body>
                </Popover>
              }
            >
              <Button variant="warning">Click for Popover</Button>
            </OverlayTrigger>
          </div>

          <p className="text-muted small">
            💡 Tip: Use <code>placement</code> prop to control position (top,
            bottom, left, right, auto). For Popovers, set{" "}
            <code>trigger="click"</code> instead of hover.
          </p>
        </Card.Body>
      </Card>
    </>
  );
}
