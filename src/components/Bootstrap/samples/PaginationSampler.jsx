import { Card, Pagination } from "react-bootstrap";
import React from "react";

export default function BootstrapPaginationSampler() {
  return (
    <>
      {/* 📄 Pagination Example */}
      <Card className="shadow-sm mb-4">
        <Card.Body>
          <Card.Title>Pagination</Card.Title>
          <Card.Text>
            Use Pagination for navigating through lists of orders, menu items,
            or reports. Customize size with <code>size</code> prop.
          </Card.Text>

          {(() => {
            const [activePage, setActivePage] = React.useState(1);
            const items = [];
            for (let number = 1; number <= 5; number++) {
              items.push(
                <Pagination.Item
                  key={number}
                  active={number === activePage}
                  onClick={() => setActivePage(number)}
                >
                  {number}
                </Pagination.Item>
              );
            }

            return (
              <>
                <Pagination className="mb-3">{items}</Pagination>

                <Pagination size="sm">
                  <Pagination.First />
                  <Pagination.Prev />
                  <Pagination.Item>{1}</Pagination.Item>
                  <Pagination.Item>{2}</Pagination.Item>
                  <Pagination.Item active>{3}</Pagination.Item>
                  <Pagination.Item>{4}</Pagination.Item>
                  <Pagination.Item>{5}</Pagination.Item>
                  <Pagination.Next />
                  <Pagination.Last />
                </Pagination>

                <p className="text-muted small mt-3">
                  💡 Tip: Include First, Prev, Next, Last items for better
                  navigation. Use <code>disabled</code> prop to disable items
                  conditionally.
                </p>
              </>
            );
          })()}
        </Card.Body>
      </Card>
    </>
  );
}
