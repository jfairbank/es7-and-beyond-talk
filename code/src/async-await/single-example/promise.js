import fetchJson from '../fetch-json/fetch-json-promise';

function printOrder(orderId) {
  fetchJson(`/orders/${orderId}`)
    .then(order => console.log(order));
}

printOrder(1);
