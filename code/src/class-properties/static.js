const assert = ::console.assert;

class Person {
  static scientificName = 'Homo sapiens';
}

const person = new Person();

assert(Person.scientificName === 'Homo sapiens');
assert(person.scientificName === undefined);
