import fetchJson from '../fetch-json/fetch-json-promise';

function printOrder(orderId) {
  const promise = Promise.resolve(
    fetchJson(`/orders/${orderId}`)
  );

  return promise.then(order => {
    console.log(order);
    return Promise.resolve(undefined);
  });
}

printOrder(1);
