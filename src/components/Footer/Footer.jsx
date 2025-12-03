import "./Footer.css";
import { Container, Button } from "react-bootstrap";

export const Footer = () => {
  return (
    <footer className="shepherd-footer">
      <Container className="text-center">
        <p className="footer-text mb-1">
          © {new Date().getFullYear()} Shepherd's Pies • All rights reserved.
        </p>

        <div className="d-flex justify-content-center gap-3 footer-links">
          <a href="#" className="footer-link text-decoration-none">
            About
          </a>
          <a href="#" className="footer-link text-decoration-none">
            Menu
          </a>
          <a href="#" className="footer-link text-decoration-none">
            Contact
          </a>
        </div>

        <div className="d-flex justify-content-center gap-3">
          <Button
            variant="outline-secondary"
            size="sm"
            className="footer-icon-btn"
          >
            <i className="bi bi-facebook"></i>
          </Button>
          <Button
            variant="outline-secondary"
            size="sm"
            className="footer-icon-btn"
          >
            <i className="bi bi-twitter"></i>
          </Button>
          <Button
            variant="outline-secondary"
            size="sm"
            className="footer-icon-btn"
          >
            <i className="bi bi-instagram"></i>
          </Button>
        </div>
      </Container>
    </footer>
  );
};
