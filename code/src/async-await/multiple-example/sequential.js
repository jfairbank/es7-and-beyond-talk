import fetchJson from '../fetch-json/fetch-json-async-await';

async function loadOrders(orderIds) {
  const orders = [];

  for (const id of orderIds) {
    const order = await fetchJson(`/orders/${id}`);
    orders.push(order);
  }

  console.log(orders);
}

loadOrders([1, 2, 3]);
