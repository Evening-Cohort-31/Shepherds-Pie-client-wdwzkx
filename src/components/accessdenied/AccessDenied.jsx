import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function AccessDenied() {
  return (
    <Container className="text-center my-5">
      <h1 className="display-5 mb-3 access-denied-title">Access Denied</h1>

      <p className="lead access-denied-text">
        You do not have permission to view this page.
      </p>

      <Button as={Link} to="/" variant="primary" className="mt-4">
        Return Home
      </Button>
    </Container>
  );
}
