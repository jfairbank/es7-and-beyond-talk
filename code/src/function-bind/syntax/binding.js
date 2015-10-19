function logThis() {
  console.log(this);
}

const obj = {
  foo: 'bar'
};

const logFromBind = logThis.bind(obj);
logFromBind(); // { foo: 'bar' }

// Now
const logFromOperator = obj::logThis;
logFromOperator(); // { foo: 'bar' }
