import fetchJson from '../../fetch-json/fetch-json-async-await';

function mockRequest(url) {
  return fetchJson(`${url}?mockRequest`);
}

async function time(name, fn) {
  console.time(`${name} total`);
  await fn();
  console.timeEnd(`${name} total`);
}

export { mockRequest, time };
