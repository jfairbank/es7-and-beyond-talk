import isEqual from 'lodash/lang/isEqual';
const assert = ::console.assert;

const obj = { x: 42, y: 100 };

const newObj   = { z: 5, ...obj };
const otherObj = { ...obj, x: 13 };

assert(isEqual(newObj,   { x: 42, y: 100, z: 5 }));
assert(isEqual(otherObj, { x: 13, y: 100 }));
assert(isEqual(obj,      { x: 42, y: 100 }));
