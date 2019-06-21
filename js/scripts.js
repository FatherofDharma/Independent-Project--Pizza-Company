//Business logic section.

function OrderList() {
  this.orders = [],
  this.ordersId = 0;
}

OrderList.prototype.addOrder = function (newOrder) {
  this.orders.push(newOrder);
};

function Order(name, pizza) {
  this.name = name,
  this.pizzas = pizzas,
  this.currentorderId = currentOrderList.ordersId,
  currentOrderList.ordersId += 1;
}

function Pizza(name, size, toppings) {
  this.name = name,
  this.size = size,
  this.toppings = toppings;
}

var currentOrderList = new OrderList();

//User interface logic section.
