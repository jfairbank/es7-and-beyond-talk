const obj = {
  hello: {
    foo: 'bar',
    world() {
      console.log(`hello ${this.foo}`);
    }
  }
};

const implicitBind = ::obj.hello.world;
const explicitBind = obj.hello::obj.hello.world;

implicitBind(); // hello bar
explicitBind(); // hello bar
