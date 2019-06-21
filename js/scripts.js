//Business logic section.

function OrderList() {
  this.orders = [],
  this.ordersId = 0;
}

Orders.prototype.addOrder = function() {

}

function Order (name, pizza) {
  this.name = name,
  this.pizzas = pizzas,
  this.currentorderId = currentOrderList.ordersId,
  currentOrderList.ordersId += 1;
}

function Pizza (name, size, toppings, ) {
  this.name = name,
  this.size = size,
  this.toppings = toppings,
}

var currentOrderList = new OrderList();

//User interface logic section.
