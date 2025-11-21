import { Alert, Col } from "react-bootstrap";

export default function BootstrapAlertsSampler() {
  return (
    <>
      {/* 💬 Alerts can be used for system messages, tips, or feedback */}
      <Col>
        <Alert variant="info">
          <strong>Tip:</strong> You can change spacing easily using Bootstrap
          utility classes like
          <code> .mt-3</code>, <code> .mb-5</code>, or <code> .p-4</code>.
        </Alert>

        <Alert variant="success">
          <strong>Did you know?</strong> You can wrap multiple sections in their
          own <code>{`<Container fluid>`}</code> to make them span the full
          width.
        </Alert>
      </Col>
    </>
  );
}
