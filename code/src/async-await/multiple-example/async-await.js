import fetchJson from '../fetch-json/fetch-json-async-await';

async function loadCustomersWithOrders() {
  const orders = await fetchJson('/orders');

  const customers = await* orders.map(order => {
    return fetchJson(`/customers/${order.customerId}`);
  });

  console.log(customers);
}

loadCustomersWithOrders();
