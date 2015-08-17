const assert = ::console.assert;

class Foo {
  myObject = { value: 42 };
}

const f1 = new Foo();
const f2 = new Foo();

f2.myObject.value = 100;

assert(f2.myObject.value === 100);
assert(f1.myObject.value === 42);
assert(f1.myObject !== f2.myObject);
assert(Foo.prototype.myObject === undefined);
