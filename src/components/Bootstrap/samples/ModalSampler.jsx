import { Col, Card, Button, Modal } from "react-bootstrap";
import React from "react";

export default function BootstrapModalSampler() {
  return (
    <>
      <Col md={6}>
        {/* 🪟 Modal Example */}
        <Card className="shadow-sm">
          <Card.Body>
            <Card.Title>Modal Example</Card.Title>
            <Card.Text>
              Modals are great for confirmations, additional info, or quick
              forms. Control visibility with a simple <code>useState</code>{" "}
              hook.
            </Card.Text>

            {/* ⚙️ Local modal demo state */}
            {(() => {
              const [show, setShow] = React.useState(false);
              const handleClose = () => setShow(false);
              const handleShow = () => setShow(true);

              return (
                <>
                  <Button variant="primary" onClick={handleShow}>
                    Launch Demo Modal
                  </Button>

                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Example Modal</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      This is a simple React Bootstrap modal. You can customize
                      the size with props like <code>size="lg"</code> or{" "}
                      <code>fullscreen</code>.
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button variant="success" onClick={handleClose}>
                        Save Changes
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </>
              );
            })()}
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}
