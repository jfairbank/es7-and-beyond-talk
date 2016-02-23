import { log } from './logger';
import fetchJson from '../../fetch-json/fetch-json-async-await';

export function mockRequest(url) {
  return fetchJson(`${url}?mockRequest`);
}

export async function time(name, fn) {
  const start = performance.now();
  await fn();
  const end = (performance.now() - start).toFixed(2);
  log(`${name} total time: ${end}ms`);
}
