function logThis() {
  console.log(this);
}

const obj = { foo: 'bar' };

obj::logThis(); // { foo: 'bar' }

// Equivalent to:
logThis.call(obj); // { foo: 'bar' }
