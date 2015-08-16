function logThis() {
  console.log(this);
}

const obj = { foo: 'bar' };

const logObj1 = obj::logThis;

// Equivalent to:
const logObj2 = logThis.bind(obj);

logObj1(); // { foo: 'bar' }
logObj2(); // { foo: 'bar' }
