function logThis() {
  console.log(this);
}

const obj = {
  foo: 'bar'
};

const logObj1 = logThis.bind(obj);
logObj1(); // { foo: 'bar' }

// Now
const logObj2 = obj::logThis;
logObj2(); // { foo: 'bar' }
