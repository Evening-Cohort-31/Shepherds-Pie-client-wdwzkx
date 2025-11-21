import "./OrderList.css"
import { useEffect, useState } from "react"
import { getOrders } from "../../services/orderService"
import { Card, Row, Col, Container, Form } from "react-bootstrap"
import { PaginationControls } from "../../Pagination"

const getTodayString = () => {
  const today = new Date()
  const year = today.getFullYear()
  const month = String(today.getMonth() + 1).padStart(2, "0")
  const day = String(today.getDate()).padStart(2, "0")
  return `${year}-${month}-${day}`
}

const PAGE_SIZE= 20


export const OrderList = () => {
    const [orders, setOrders] = useState([])
    const [filteredOrders, setFilteredOrders] = useState([])
    const [paginatedOrders, setPaginatedOrders] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [selectedDate, setSelectedDate] = useState(getTodayString())

      useEffect (() => {
    getOrders().then((ordersArray) => {
    setOrders(ordersArray)
  })
}, [])

    useEffect(() => {

        const ordersForDay = orders.filter((order) => {
            const orderDate = order.orderTimestamp.split("T")[0]
            return orderDate === selectedDate
        })

        const sortedOrders = ordersForDay.sort((a, b) =>
    b.orderTimestamp.localeCompare(a.orderTimestamp))
        
        setFilteredOrders(sortedOrders)
        setCurrentPage(1)
}, [orders, selectedDate])

useEffect(() => {
    const startIndex = (currentPage -1) * PAGE_SIZE
    const endIndex = startIndex + PAGE_SIZE

    const ordersForPage = filteredOrders.slice(startIndex, endIndex)

    setPaginatedOrders(ordersForPage)
}, [filteredOrders, currentPage])

const handleDateChange = (event) => {
    setSelectedDate(event.target.value)
}


return (
<Container className="mt-4">
      <Row>
        <Col>
          <h2 className="mb-4">Orders</h2>
        </Col>
      </Row>
      <Row>
        <Col md={4} className="mb-4">
          <Form.Group controlId="date-filter">
            <Form.Label>Filter by Date:</Form.Label>
            <Form.Control
              type="date"
              value={selectedDate}
              onChange={handleDateChange}
            />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        {paginatedOrders.map((order) => {
          return (

            <Col md={6} lg={4} className="mb-4" key={order.id}>
              <Card>
                <Card.Body>
                  <Card.Title>Order #{order.id}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {order.customer?.firstName} {order.customer?.lastName}
                  </Card.Subtitle>
                  <Card.Text>
                    <strong>Status:</strong> {order.status}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <PaginationControls
            currentPage={currentPage}
            totalOrders={filteredOrders.length}
            pageSize={PAGE_SIZE}
            onPageChange={setCurrentPage}
          />
        </Col>
      </Row>
    </Container>
  );
};