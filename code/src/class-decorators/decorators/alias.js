function alias(aliasName) {
  return (target, name, descriptor) => {
    const newDescriptor = Object.assign({}, descriptor, {
      value(...args) {
        return this[name](...args);
      }
    });

    Object.defineProperty(target, aliasName, newDescriptor);
  };
}

export default alias;
