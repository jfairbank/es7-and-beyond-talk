{
  type: 'accessor',
  hint: 'getter',
  property: {
    name: () => 'fullName',
    initializer: () => ({
      get() {
        return `${this.firstName} ${this.lastName}`;
      }
    }),
    get(obj) { return obj.fullName; },
    set(obj, value) { obj.fullName = value; }
  },
  enumerable: false,
  configurable: true
}
