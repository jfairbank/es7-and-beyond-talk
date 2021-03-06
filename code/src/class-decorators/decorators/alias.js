function alias(aliasName) {
  return (target, descriptor) => {
    const name = descriptor.property.name();
    const newDescriptor = Object.assign({}, descriptor, {
      value(...args) {
        return this[name](...args);
      }
    });

    Object.defineProperty(
      target,
      aliasName,
      newDescriptor
    );
  };
}

export default alias;
