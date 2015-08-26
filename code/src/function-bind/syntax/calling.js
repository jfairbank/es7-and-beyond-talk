function logThis() {
  console.log(this);
}

const obj = {
  foo: 'bar'
};

logThis.call(obj); // { foo: 'bar' }

// Now
obj::logThis(); // { foo: 'bar' }
