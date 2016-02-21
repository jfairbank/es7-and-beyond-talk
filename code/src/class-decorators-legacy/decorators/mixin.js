function mixin(...behaviors) {
  return (target) => {
    behaviors.forEach(behavior => {
      Reflect.ownKeys(behavior).forEach(property => {
        Object.defineProperty(target.prototype, property, {
          value: behavior[property],
          writable: true
        });
      });
    });

    return target;
  };
}

function mixinClass(...klasses) {
  return mixin(...klasses.map(klass => klass.prototype));
}

export { mixin, mixinClass };
