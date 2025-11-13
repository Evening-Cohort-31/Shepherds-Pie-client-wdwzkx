import "./OrderList.css";
import { useEffect, useState } from "react";
import { getOrders } from "../../services/orderService";
import { Card } from "react-bootstrap";


export const OrderList = () => {
    const [orders, setOrders] = useState([])
    const [todayOrders, setTodayOrders] = useState([])

      const getAndSetOrders = () => {
    getOrders().then((ordersArray) => {
    setOrders(ordersArray)
  })}

    useEffect(() => {
        getAndSetOrders()
    }, [])

    useEffect(() => {

        const today = new Date(); 

        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0'); 
        const day = String(today.getDate()).padStart(2, '0');
        const todayString = `${year}-${month}-${day}`; 

        const todayOrdersArray = orders.filter(order => {
            const orderDate = order.orderTimestamp.split('T')[0];
    
            return orderDate === todayString
        })
        setTodayOrders(todayOrdersArray)
    }, [orders])


return (
         <div className="orders">
            <h2>Orders</h2>
            {orders.map((order) => {
                return (
                    <Card key={order.id}>
                        <div className="order-card" >
                            <div>
                                <div className="order-info">Order Number</div>
                                <div>{order.id}</div>
                            </div>
                            <div>
                                <div className="order-info">Customer Name</div>
                                <div>
                                    {order.customer?.firstName} {order.customer?.lastName}
                                </div>
                            </div>
                            <div>
                                <div className="order-info">Status</div>
                                <div>{order.status}</div>
                            </div>
                        </div>
                    </Card>
                )  
            })}
        </div>
)
}