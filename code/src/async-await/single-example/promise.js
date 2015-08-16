import fetchJson from '../fetch-json/fetch-json-promise';

function loadOrder(orderId) {
  fetchJson(`/orders/${orderId}`)
    .then(order => console.log(order));
}

loadOrder(1);
