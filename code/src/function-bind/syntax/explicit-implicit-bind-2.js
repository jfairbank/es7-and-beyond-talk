const obj = {
  foo: 'bar',

  hello: {
    world() {
      console.log(`hello ${this.foo}`);
    }
  }
};

const unbound = obj.hello.world;
const implicitBind = ::obj.hello.world;
const explicitBind = obj::obj.hello.world;

unbound();      // throw TypeError
implicitBind(); // 'hello undefined'
explicitBind(); // 'hello bar'
