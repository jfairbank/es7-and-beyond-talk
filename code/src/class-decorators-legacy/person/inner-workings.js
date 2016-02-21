let descriptor = {
  get() { return `${this.firstName} ${this.lastName}`; },
  enumerable: false,
  configurable: true
};

descriptor = enumerable(Person.prototype, 'fullName', descriptor) || descriptor;
Object.defineProperty(Person.prototype, 'fullName', descriptor);
