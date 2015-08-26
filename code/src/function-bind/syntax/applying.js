function logThis(...args) {
  console.log(this, ...args);
}

function logObj1(obj, ...args) {
  logThis.apply(obj, args);
}

function logObj2(obj, ...args) {
  obj::logThis(...args);
}

const obj = { foo: 'bar' };

logObj1(obj, 42, 'baz'); // { foo: 'bar' } 42 'baz'
logObj2(obj, 42, 'baz'); // { foo: 'bar' } 42 'baz'
