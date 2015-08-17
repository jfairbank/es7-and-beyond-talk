import isEqual from 'lodash/lang/isEqual';
const assert = ::console.assert;

const obj = { a: 42, b: 'foo', c: 5, d: 'bar' };

const { a, b, ...rest } = obj;
const { b: _, ...noB } = obj;

assert(a === 42);
assert(b === 'foo');

assert(isEqual(rest, {
  c: 5, d: 'bar'
}));

assert(isEqual(noB, {
  a: 42, c: 5, d: 'bar'
}));
