const assert = ::console.assert;

class Foo {
  myValue = 42;

  constructor() {
    this.myOtherValue = this.myValue + 8;
  }
}

const f = new Foo();

assert(f.myValue === 42);
assert(f.myOtherValue === 50);
