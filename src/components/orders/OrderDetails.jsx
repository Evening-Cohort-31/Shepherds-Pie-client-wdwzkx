import { useState, useEffect } from "react"
import { Card, ListGroup } from "react-bootstrap"
import { getOrderById } from "../../services/orderService"

export const OrderDetails = ({ orderId }) => {
  const [order, setOrder] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (orderId) {
      setLoading(true)

        getOrderById(orderId).then((data) => {
          setOrder(data)
          setLoading(false)
        })
    }
  }, [orderId]) 

  if (loading) {
    return <p>Loading order details...</p>
  }

  if (!order) {
    return <p>Order not found.</p>
  }

  return (
    <Card>
      <Card.Header>
        <strong>Order ID: {order.id}</strong>
      </Card.Header>
      <Card.Body>
        <Card.Title>Order Summary</Card.Title>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <strong>Customer:</strong> {order.customerName}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Placed At:</strong>{" "}
            {new Date(order.datetime).toLocaleString()}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Pizzas:</strong>
            {order.pizzas.map((pizza) => (
              <Card key={pizza.id} className="my-2">
                <Card.Body>
                  <Card.Text>
                    <strong>Size:</strong> {pizza.size}
                    <br />
                    <strong>Sauce:</strong> {pizza.sauce}
                    <br />
                    <strong>Cheese:</strong> {pizza.cheese}
                    <br />
                    <strong>Toppings:</strong> {pizza.toppings.join(", ")}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <strong>Pizza Price:</strong> ${pizza.price.toFixed(2)}
                </Card.Footer>
              </Card>
            ))}
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
      <Card.Footer>
        <h5 className="text-end">
          Total Cost: ${order.totalCost.toFixed(2)}
        </h5>
      </Card.Footer>
    </Card>
  )
}