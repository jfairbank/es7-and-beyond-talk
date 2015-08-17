const assert = ::console.assert;

class Foo {
  myValue = 42;
  static myOtherValue = 'bar';
}

const f = new Foo();

assert(f.myValue === 42);
assert(Foo.prototype.myValue === undefined);
assert(Foo.myValue === undefined);

assert(Foo.myOtherValue === 'bar');
assert(f.myOtherValue === undefined);
