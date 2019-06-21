//Business logic section.

function OrderList() {
  this.orders = [],
  this.ordersId = 0;
}

OrderList.prototype.addOrder = function (newOrder) {
  this.orders.push(newOrder);
};

function Order(accountName) {
  this.accountName = accountName,
  this.pizzas = [],
  this.currentorderId = currentOrderList.ordersId,
  currentOrderList.ordersId += 1;
}

// Order.prototype.addPizza() {
//
// }

function Pizza(name, size, toppings) {
  this.name = name,
  this.size = size,
  this.toppings = toppings;
}

var currentOrderList = new OrderList();
var order1 = new Order('Daniel');
var order2 = new Order('Bob');
var newPizza = new Pizza('pepperoni', 'large', ['olives', 'onions']);
currentOrderList.addOrder(order1);

// order1.addPizza

//User interface logic section.
