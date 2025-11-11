import { Navbar, Nav, Container, Button } from "react-bootstrap";

export default function BootstrapNavbarSampler() {
  return (
    <>
      {/* Tip: The Navbar component can hold your app title, links, and toggleable menus. */}
      {/* Variants include "light", "dark", and any background color like bg="primary". */}
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        className="rounded shadow-sm mb-4"
      >
        <Container fluid>
          <Navbar.Brand href="#">Shepherd's Pies NavBar Example</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-demo" />
          <Navbar.Collapse id="navbar-demo">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#orders">Orders</Nav.Link>
              <Nav.Link href="#reports">Reports</Nav.Link>
            </Nav>
            <Button variant="outline-light" size="sm">
              Log Out
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
