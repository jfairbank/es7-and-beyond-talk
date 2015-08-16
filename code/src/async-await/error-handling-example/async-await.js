import fetchJson from '../fetch-json/fetch-json-async-await';

async function loadOrder(orderId) {
  try {
    const order = await fetchJson(`/orders/${orderId}`);
    console.log(order);
  } catch(e) {
    console.log('error retrieving order', e.data);
  }
}

loadOrder();
