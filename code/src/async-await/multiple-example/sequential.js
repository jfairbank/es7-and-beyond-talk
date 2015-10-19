async function printOrders(orderIds) {
  const orders = [];

  for (const id of orderIds) {
    const order = await fetchOrder(id);
    orders.push(order);
  }

  console.log(orders);
}

printOrders([1, 2, 3]);
