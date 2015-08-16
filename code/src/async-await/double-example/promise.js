import fetchJson from '../fetch-json/fetch-json-promise';

function loadCustomerFromOrder(orderId) {
  fetchJson(`/orders/${orderId}`)
    .then(order => fetchJson(`/customers/${order.customerId}`))
    .then(customer => console.log(customer.name));
}

loadCustomerFromOrder(1);
