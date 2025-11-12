import { Card, Spinner, ProgressBar } from "react-bootstrap";

export default function BootstrapSpinnerProgressBarSampler() {
  return (
    <>
      {/* ⏳ Spinner and Progress Examples */}
      <Card className="shadow-sm mb-4">
        <Card.Body>
          <Card.Title>Spinners & Progress Bars</Card.Title>
          <Card.Text>
            Show loading states with Spinners, or track progress with Progress
            Bars. Both support various colors and sizes.
          </Card.Text>

          <div className="mb-4">
            <h6>Spinners:</h6>
            <div className="d-flex gap-3 align-items-center mb-3">
              <Spinner animation="border" variant="primary" />
              <Spinner animation="border" variant="success" size="sm" />
              <Spinner animation="grow" variant="danger" />
              <Spinner animation="grow" variant="warning" size="sm" />
            </div>
            <p className="text-muted small">
              💡 Use <code>animation="border"</code> or <code>"grow"</code>, and{" "}
              <code>size="sm"</code> for smaller spinners.
            </p>
          </div>

          <div>
            <h6>Progress Bars:</h6>
            <ProgressBar now={60} label="60%" className="mb-2" />
            <ProgressBar variant="success" now={85} className="mb-2" />
            <ProgressBar striped variant="warning" now={40} className="mb-2" />
            <ProgressBar animated striped variant="danger" now={75} />
            <p className="text-muted small mt-2">
              💡 Tip: Add <code>striped</code> and <code>animated</code> props
              for visual interest. Stack multiple bars for multi-step progress.
            </p>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
