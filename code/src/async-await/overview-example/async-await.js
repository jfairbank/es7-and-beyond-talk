import fetchJson from '../fetch-json/fetch-json-async-await';

async function loadCustomersWithOrders() {
  try {
    const orders = await fetchJson('/orders');

    const customers = await* orders.map(order => {
      return fetchJson(`/customers/${order.customerId}`);
    });

    console.log(customers);
  } catch (e) {
    console.log('error retrieving data', e.data);
  }
}

loadCustomersWithOrders();
