function createDog(options) {
  const defaults = {
    breed: 'Sheltie',
    name: 'Tucker'
  };

  return { ...defaults, ...options };
}

export default createDog;
