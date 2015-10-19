async function printOrders(orderIds) {
  const orders = await Promise.all(
    orderIds.map(id => fetchOrder(id))
  );

  console.log(orders);
}

printOrders([1, 2, 3]);
