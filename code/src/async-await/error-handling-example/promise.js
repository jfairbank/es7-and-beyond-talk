import fetchJson from '../fetch-json/fetch-json-promise';

function loadOrder(orderId) {
  fetchJson(`/orders/${orderId}`)
    .then(order => console.log(order))
    .catch(e => console.log('error retrieving order', e.data));
}

loadOrder(1);
