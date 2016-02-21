function autobind(target, name, { value: fn }) {
  return {
    configurable: true,
    get() {
      return this[name] = this::fn;
    },
    set(newValue) {
      if (this === target) {
        delete this[name];
        this[name] = newValue;
      } else {
        Object.defineProperty(this, name, {
          configurable: true,
          enumerable: true,
          value: newValue,
          writable: true
        });
      }
    }
  };
}

export default autobind;
