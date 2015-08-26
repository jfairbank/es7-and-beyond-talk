const obj = {
  foo: 'bar',
  log() {
    console.log(this.foo);
  }
};

const unbound = obj.log;
const implicitBind = ::obj.log;
const explicitBind = obj::obj.log;

unbound();      // throw TypeError
implicitBind(); // bar
explicitBind(); // bar
