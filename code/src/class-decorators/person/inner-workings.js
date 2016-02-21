let descriptor = {
  property: {
    name: () => 'fullName',
    initializer: () => ({
      get() { return `${this.firstName} ${this.lastName}`; }
    }),
    get(...) { ... }
    set(...) { ... }
  },
  enumerable: false,
  configurable: true
};

descriptor = enumerable(Person.prototype, descriptor) || descriptor;
Object.defineProperty(Person.prototype, descriptor);
