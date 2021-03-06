class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const p = new Person('Jeremy', 'Fairbank');

for (const key in p) {
  console.log(`${key}: ${p[key]}`);
}
// firstName: Jeremy
// lastName: Fairbank
