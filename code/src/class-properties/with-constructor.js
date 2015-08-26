const assert = ::console.assert;

class Person {
  firstName = 'Jeremy';

  constructor({ firstName, lastName }) {
    if (firstName) this.firstName = firstName;
    this.lastName = lastName;
    this.name = `${this.firstName} ${this.lastName}`;
  }
}

const j = new Person({ lastName: 'Fairbank' });
const e = new Person({ firstName: 'Emily', lastName: 'Fairbank' });

assert(j.firstName === 'Jeremy');
assert(e.firstName === 'Emily');
assert(j.name === 'Jeremy Fairbank');
assert(e.name === 'Emily Fairbank');
