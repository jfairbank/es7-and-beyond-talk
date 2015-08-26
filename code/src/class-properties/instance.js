const assert = ::console.assert;

class Person {
  firstName = 'Jeremy';
}

const person = new Person();

assert(person.firstName === 'Jeremy');
assert(Person.prototype.firstName === undefined);
