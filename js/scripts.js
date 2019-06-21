//Business logic section.

//section for the orderlist and it's prototype methods.
//creates an object with an array to store all orders in.

function OrderList() {
  this.orders = [],
  this.orderId = 0;
}

//This prototype assigns id's to new orders while adding them to the orderlist array.

OrderList.prototype.addOrder = function (newOrder) {
  newOrder.orderId = this.assignId();
  this.orders.push(newOrder);
};

//Section for order objects and order prototypes.

function Order(accountName) {
  this.accountName = accountName,
  this.pizzas = [];
}

//assigns an id to an order.

OrderList.prototype.assignId = function () {
  this.orderId += 1;
  return this.orderId;
};

Order.prototype.addPizza = function (newPizza) {
  this.pizzas.push(newPizza);
};

function Pizza(name, size, toppings) {
  this.name = name,
  this.size = size,
  this.toppings = toppings;
}

var currentOrderList = new OrderList();
var order1 = new Order('Daniel');
var order2 = new Order('Bob');
var newPizza1 = new Pizza('pepperoni', 'large', ['olives', 'onions']);
currentOrderList.addOrder(order1);
currentOrderList.addOrder(order2);

order1.addPizza(newPizza1);

//User interface logic section.
