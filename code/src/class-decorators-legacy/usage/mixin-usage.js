import { mixin } from '../decorators';
import { EventEmitter } from 'events';

const Quadrupedal = {
  walk() {
    console.log(`${this.name} walks with four legs`);
  }
};

@mixin(Quadrupedal, EventEmitter.prototype)
class Dog {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  haveBirthday() {
    this.age++;
    this.emit('birthday', this);
  }
}

const dog = new Dog('Tucker', 8);

dog.on('birthday', d => {
  console.log(`${d.name} just turned ${d.age}`);
});

dog.haveBirthday(); // Tucker just turned 9
dog.walk();         // Tucker walks with four legs
