import { memoize } from '../decorators';

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  @memoize
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const person = new Person('Jeremy', 'Fairbank');
console.log(person.fullName);
console.log(person.fullName);
