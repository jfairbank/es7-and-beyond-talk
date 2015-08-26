import { pick, omit } from 'lodash/object';
import isEqual from 'lodash/lang/isEqual';
const assert = console.assert.bind(console);

const obj = { a: 42, b: 'foo', c: 5, d: 'bar' };

const { a, b } = obj;
const rest = pick(obj, 'c', 'd');

assert(a === 42);
assert(b === 'foo');

assert(isEqual(rest, { c: 5, d: 'bar' }));
