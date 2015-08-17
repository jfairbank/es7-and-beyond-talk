const assert = ::console.assert;

class Foo {
  myValue = 42;
  myOtherValue = 5;
}

class Bar extends Foo {
  myOtherValue = 100;
  myOwnValue = 'hello world';
}

const f = new Foo();
const b = new Bar();

assert(b.myValue === 42);
assert(b.myOtherValue === 100);
assert(b.myOwnValue === 'hello world');
assert(f.myOwnValue === undefined);
