function logThis(...args) {
  console.log(this, ...args);
}

function logWithApply(obj, ...args) {
  logThis.apply(obj, args);
}

function logWithOperator(obj, ...args) {
  obj::logThis(...args);
}

const obj = { foo: 'bar' };

logWithApply(obj, 42, 'baz'); // { foo: 'bar' } 42 'baz'
logWithOperator(obj, 42, 'baz'); // { foo: 'bar' } 42 'baz'
