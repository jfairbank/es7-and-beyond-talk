class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

Object.defineProperty(Person.prototype, 'fullName', {
  enumerable: true,
  get() {
    return `${this.firstName} ${this.lastName}`;
  }
})

const p = new Person('Jeremy', 'Fairbank');

for (const key in p) {
  console.log(`${key}: ${p[key]}`);
}

// firstName: Jeremy
// lastName: Fairbank
// fullName: Jeremy Fairbank
