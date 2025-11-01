ERD TABLES

users: 

id pk

name

email

orders: 

id pk

employeeId fk

delivererId fk

tableNumber int

tipAmount decimal

dateTimePlaced time

sizes: 

id pk

name 

Inches int

baseCost decimal

cheeses: 

id pk

name 

sauces: 

id pk

name 

toppings:

id pk

name 

cost decimal

customPizza: 

id pk

orderId fk

sizeId fk

cheeseId fk

sauceId fk

pizzaWithToppings: join table

id pk

customPizzaId fk

toppingId fk

COMPONENTS

App.jsx - renders the NavBar and the routes for the rest of the application

NavBar.jsx - generates links to access 

View All Orders- route to /orders

Create New Order- route to /orders/new

OrderList.jsx- displays a list of all orders that we get from fetching in OrderService.jsx

OrderService.jsx- fetch call to get all orders from the database.json


Order.jsx- displays a summary of an individual order and is a link to a page displaying all of that orders details.

OrderInfo.jsx- shows all details of a specific order on its own page.

NewOrderForm.jsx- where the user can select dine in or delivery, after that a table number or deliverer can be assigned. Then you can render pizzabuilder and currentordercart to this page as well.

PizzaBuilder.jsx- a series of dropdowns to select an option for size (adds to price), cheese, and sauce. Also has checkboxes where the user can select any topping they would like and selecting those boxes also adds price based on price of topping and how many are selected. Creates a button to add the current pizza with user selections to the cart. 

CurrentOrderCart.jsx- displays the current pizzas added using the button in the pizzabuilder component and their prices as well as a current total. 


