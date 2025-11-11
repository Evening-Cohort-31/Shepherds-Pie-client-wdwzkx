import { Container, Button } from "react-bootstrap";

export default function BootstrapFooterSampler() {
  return (
    <>
      {/* ⚓️ Footer Section */}
      {/* A responsive footer with centered text and muted styling */}
      {/* You can reuse this layout for your app's main footer or per-page footers. */}
      <footer className="bg-light py-4 mt-4 border-top">
        <Container className="text-center">
          {/* 🧠 Tip: use text-muted for subtle, professional-looking text */}
          <p className="text-muted mb-1">
            © {new Date().getFullYear()} Shepherd's Pies • All rights reserved.
          </p>

          {/* 🔗 Footer navigation links */}
          <div className="d-flex justify-content-center gap-3 mb-2">
            <a
              href="#about"
              className="text-decoration-none text-secondary small"
            >
              About
            </a>
            <a
              href="#menu"
              className="text-decoration-none text-secondary small"
            >
              Menu
            </a>
            <a
              href="#contact"
              className="text-decoration-none text-secondary small"
            >
              Contact
            </a>
          </div>

          {/* 🧱 Optional social icons using Bootstrap utility classes */}
          {/* Tip: if you add react-icons, you can use icons like <FaFacebook />, etc. */}
          <div className="d-flex justify-content-center gap-3">
            <Button variant="outline-secondary" size="sm">
              <i className="bi bi-facebook"></i> {/* Bootstrap Icons example */}
            </Button>
            <Button variant="outline-secondary" size="sm">
              <i className="bi bi-twitter"></i>
            </Button>
            <Button variant="outline-secondary" size="sm">
              <i className="bi bi-instagram"></i>
            </Button>
          </div>

          {/* 💡 Developer tip: to use these icons, run:
            npm install bootstrap-icons
            and import "bootstrap-icons/font/bootstrap-icons.css" in index.js */}
        </Container>
      </footer>
    </>
  );
}
