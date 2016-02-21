function readonly(target, name, descriptor) {
  descriptor.writable = false;
  return descriptor;
}

export default readonly;
