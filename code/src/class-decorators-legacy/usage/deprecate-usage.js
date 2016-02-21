import { deprecate } from '../decorators';

class Foo {
  bar() { console.log('bar'); }

  @deprecate
  baz() { console.log('baz'); }

  @deprecate
  quux() { console.log('quux'); }
}

const f = new Foo();

f.bar();
f.baz();
f.quux();
