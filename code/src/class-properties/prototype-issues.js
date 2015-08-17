const assert = ::console.assert;

function Foo() {}

Foo.prototype.myObject = {
  value: 42
};

const f1 = new Foo();
const f2 = new Foo();

f2.myObject.value = 100;

assert(f2.myObject.value === 100);
assert(f1.myObject.value === 100);
assert(Foo.prototype.myObject.value === 100);
assert(f1.myObject === f2.myObject);
