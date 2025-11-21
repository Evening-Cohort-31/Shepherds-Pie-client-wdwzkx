import { Col, Card, Accordion } from "react-bootstrap";

export default function BootstrapAccordionSampler() {
  return (
    <>
      <Col md={6}>
        {/* 📚 Accordion Example */}
        <Card className="shadow-sm">
          <Card.Body>
            <Card.Title>Accordion Example</Card.Title>
            <Card.Text>
              Accordions help organize info into expandable panels. Great for
              FAQs or grouped settings.
            </Card.Text>

            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  What sizes of pizza do we offer?
                </Accordion.Header>
                <Accordion.Body>
                  Shepherd's Pies serves 8", 10", 14", 16", and 18" pizzas. Each
                  size has a different base price.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  Can customers customize toppings?
                </Accordion.Header>
                <Accordion.Body>
                  Absolutely! Toppings can be mixed and matched — the component
                  list in our database drives the menu.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  How can I adjust Accordion style?
                </Accordion.Header>
                <Accordion.Body>
                  Use props like <code>alwaysOpen</code> or override Bootstrap's
                  SCSS variables to tweak background, borders, and padding.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}
