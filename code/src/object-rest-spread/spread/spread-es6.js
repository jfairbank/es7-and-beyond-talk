import isEqual from 'lodash/lang/isEqual';
const assert = console.assert.bind(console);

const obj = { x: 42, y: 100 };

const newObj = Object.assign({
  z: 5
}, obj);

const otherObj = Object.assign({}, obj, {
  x: 13
});

assert(isEqual(newObj, {
  z: 5, x: 42, y: 100
}));

assert(otherObj.y === 100);
assert(otherObj.x === 13);
