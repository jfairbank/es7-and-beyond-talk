"use strict";

function printOrder(orderId) {
  var order;
  return regeneratorRuntime.async(function printOrder$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.next = 2;
        return regeneratorRuntime.awrap(fetchOrder(orderId));

      case 2:
        order = context$1$0.sent;

        console.log(order);

      case 4:
      case "end":
        return context$1$0.stop();
    }
  }, null, this);
}

printOrder(1);

