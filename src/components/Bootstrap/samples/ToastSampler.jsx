import { Card, Button, Toast, ToastContainer } from "react-bootstrap";
import React from "react";

export default function BootstrapToastSampler() {
  return (
    <>
      {/* 🍞 Toast Notifications */}
      <Card className="shadow-sm mb-4">
        <Card.Body>
          <Card.Title>Toast Notifications</Card.Title>
          <Card.Text>
            Toasts provide non-intrusive feedback. Perfect for order
            confirmations, success messages, or errors.
          </Card.Text>

          {(() => {
            const [showA, setShowA] = React.useState(false);
            const [showB, setShowB] = React.useState(false);

            return (
              <>
                <div className="d-flex gap-2 mb-3">
                  <Button
                    variant="primary"
                    onClick={() => setShowA(true)}
                    size="sm"
                  >
                    Show Success Toast
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => setShowB(true)}
                    size="sm"
                  >
                    Show Error Toast
                  </Button>
                </div>

                <ToastContainer position="top-end" className="p-3">
                  <Toast
                    show={showA}
                    onClose={() => setShowA(false)}
                    delay={3000}
                    autohide
                    bg="success"
                  >
                    <Toast.Header>
                      <strong className="me-auto">Order Placed!</strong>
                      <small>just now</small>
                    </Toast.Header>
                    <Toast.Body className="text-white">
                      Your pizza order has been confirmed.
                    </Toast.Body>
                  </Toast>

                  <Toast
                    show={showB}
                    onClose={() => setShowB(false)}
                    delay={3000}
                    autohide
                    bg="danger"
                  >
                    <Toast.Header>
                      <strong className="me-auto">Error</strong>
                      <small>just now</small>
                    </Toast.Header>
                    <Toast.Body className="text-white">
                      Unable to process your request. Please try again.
                    </Toast.Body>
                  </Toast>
                </ToastContainer>

                <p className="text-muted small">
                  💡 Tip: Use <code>autohide</code> with{" "}
                  <code>delay={`{3000}`}</code> to auto-dismiss. Position with
                  ToastContainer's <code>position</code> prop (top-end,
                  bottom-start, etc.).
                </p>
              </>
            );
          })()}
        </Card.Body>
      </Card>
    </>
  );
}
