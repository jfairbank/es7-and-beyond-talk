import { alias } from '../decorators';

class Person {
  constructor(name) {
    this.name = name;
  }

  @alias('sayHello')
  greet() {
    console.log(`Hello. My name is ${this.name}.`);
  }
}

const person = new Person('Jeremy');

person.greet(); // Hello. My name is Jeremy.
person.sayHello(); // Hello. My name is Jeremy.
