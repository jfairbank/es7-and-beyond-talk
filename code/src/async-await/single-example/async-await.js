import fetchJson from '../fetch-json/fetch-json-async-await';

async function loadOrder(orderId) {
  const order = await fetchJson(`/orders/${orderId}`);
  console.log(order);
}

loadOrder();
