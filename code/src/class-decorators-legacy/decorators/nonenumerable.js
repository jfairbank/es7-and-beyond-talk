function nonenumerable(target, name, descriptor) {
  descriptor.enumerable = false;
  return descriptor;
}

export default nonenumerable;
