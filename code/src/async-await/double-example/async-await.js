import fetchJson from '../fetch-json/fetch-json-async-await';

async function loadCustomerFromOrder(orderId) {
  const order = await fetchJson(`/orders/${orderId}`);
  const customer = await fetchJson(`/customers/${order.customerId}`);

  console.log(customer);
}

loadCustomerFromOrder();
