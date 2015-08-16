import { mixin } from '../decorators';

//class EventEmitter {
//  on(event, cb) {
//    const events = this._events || (this._events = {});
//    const handlers = events[event] || (events[event] = []);

//    handlers.push(cb);
//  }

//  trigger(event, ...args) {
//    const handlers = (this._events || {})[event] || [];
//    handlers.forEach(handler => handler(...args));
//  }

//  off(event, cb) {
//    const events = this._events;

//    if (!events) {
//      return;
//    }

//    const handlers = events[event];

//    if (!handlers) {
//      return;
//    }

//    events[event] = do {
//      if (cb) handlers.filter(handler => handler !== cb);
//      else [];
//    };
//  }
//}

////function trim(strings, ...values) {
////  return values.reduceRight((memo, value, i) => {
////    return strings[i] + value + memo;
////  }, strings[strings.length - 1]).trim();
////}

class Animal {
  greet() {
    console.log(`Hello, I am a ${this.type}.`);
    this.makeSound();
  }
}

const Pet = {
  playWith() {
    console.log(`You play with the ${this.type}.`);
  }
};

const Wild = {
  playWith() {
    console.log(
      `It might not be safe to play with the ${this.type}.`
    );
  }
};

@mixin(Pet)
class Dog extends Animal {
  get type() { return 'dog'; }
  makeSound() {
    console.log('Bark, bark!');
  }
}

@mixin(Wild)
class Wolf extends Animal {
  get type() { return 'wolf'; }
  makeSound() {
    console.log('Howl!');
  }
}

const fido = new Dog();
const lobo = new Wolf();

fido.greet();
lobo.greet();

fido.playWith();
lobo.playWith();

////@mixinClass(EventEmitter)
////class Person {
////  constructor(firstName, lastName, age) {
////    this.firstName = firstName;
////    this.lastName = lastName;
////    this.age = age;
////  }

////  name() {
////    return `${this.firstName} ${this.lastName}`;
////  }

////  haveBirthday() {
////    this.trigger('have:birthday', ++this.age);
////  }
////}

////const person = new Person('Jeremy', 'Fairbank', 28);

////person.on('have:birthday', age => console.log(`Now you are ${age} years old!`));

////person.haveBirthday();
