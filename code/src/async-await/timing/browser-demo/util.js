import fetchJson from '../../fetch-json/fetch-json-async-await';

function mockRequest(url) {
  return fetchJson(`${url}?mockRequest`);
}

async function time(name, fn) {
  const time = performance.now();
  await fn();
  console.log(`${name} total: ${performance.now() - time}ms`)
}

export { mockRequest, time };
