let descriptor = {
  get() { return `${this.firstName} ${this.lastName}`; },
  enumerable: false,
  configurable: true
};

descriptor = enumerable(Person.prototype, 'name', descriptor) || descriptor;
Object.defineProperty(Person.prototype, 'name', descriptor);
