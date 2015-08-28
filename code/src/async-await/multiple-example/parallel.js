import fetchJson from '../fetch-json/fetch-json-async-await';

async function loadOrders(orderIds) {
  const orders = await Promise.all(orderIds.map(id => {
    return fetchJson(`/orders/${id}`);
  }));

  console.log(orders);
}

loadOrders([1, 2, 3]);
