function deprecate(target, name, descriptor) {
  const origFn = descriptor.value;
  const method = `${target.constructor.name}#${name}`;

  descriptor.value = function(...args) {
    console.warn(`DEPRECATION: ${method}`);
    return origFn.apply(this, args);
  };

  return descriptor;
}

export default deprecate;
