import fetchJson from '../fetch-json/fetch-json-async-await';

async function loadCustomersWithOrders() {
  const orders = await fetchJson('/orders');
  const customers = [];

  for (const order of orders) {
    const customer =
      await fetchJson(`/customers/${order.customerId}`);

    customers.push(customer);
  }

  console.log(customers);
}

loadCustomersWithOrders();
