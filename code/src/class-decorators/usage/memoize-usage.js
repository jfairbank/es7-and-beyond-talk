import { memoize } from '../decorators';

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  @memoize
  get name() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const person = new Person('Jeremy', 'Fairbank');
console.log(person.name);
console.log(person.name);
