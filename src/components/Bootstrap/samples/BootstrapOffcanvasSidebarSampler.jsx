import { Button, Offcanvas, Nav } from "react-bootstrap";
import React from "react";

export default function BootstrapOffcanvasSidebarSampler() {
  return (
    <>
      {" "}
      {/* Offcanvas panels slide in from a screen edge. Great for navigation or user settings. */}
      {/* You can change the side using placement="start" | "end" | "top" | "bottom". */}
      {(() => {
        const [show, setShow] = React.useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        return (
          <>
            <Button variant="primary" onClick={handleShow} className="mb-3">
              Open Offcanvas Sidebar
            </Button>

            <Offcanvas show={show} onHide={handleClose} placement="start">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Navigation Menu</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="flex-column">
                  <Nav.Link href="#dashboard">Dashboard</Nav.Link>
                  <Nav.Link href="#orders">Orders</Nav.Link>
                  <Nav.Link href="#reports">Reports</Nav.Link>
                  <Nav.Link href="#settings">Settings</Nav.Link>
                </Nav>
                <hr />
                <p className="text-muted small">
                  💡 Tip: Offcanvas components can also hold forms or filters —
                  just drop in a <code>{`<Form>`}</code> and{" "}
                  <code>{`<Button>`}</code> combo.
                </p>
                <Button variant="secondary" onClick={handleClose}>
                  Close Sidebar
                </Button>
              </Offcanvas.Body>
            </Offcanvas>
          </>
        );
      })()}
    </>
  );
}
