const assert = ::console.assert;

const obj = { x: 42, z: 5 };

Object.defineProperty(obj, 'y', {
  enumerable: false,
  value: 100
});

const { x, ...rest } = obj;

assert(x === 42);
assert(obj.y === 100);
assert(rest.y === undefined);
