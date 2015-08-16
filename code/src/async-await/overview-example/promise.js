import fetchJson from '../fetch-json/fetch-json-promise';

function loadCustomersWithOrders() {
  fetchJson('/orders')
    .then(orders => {
      return Promise.all(orders.map(order => {
        return fetchJson(`/customers/${order.customerId}`);
      }));
    })
    .then(customers => console.log(customers))
    .catch(e => {
      console.log('error retrieving data', e.data);
    });
}

loadCustomersWithOrders();
