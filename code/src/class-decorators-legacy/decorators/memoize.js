const memoized = new WeakMap();

function tableFor(obj) {
  let table = memoized.get(obj);

  if (!table) {
    table = Object.create(null);
    memoized.set(obj, table);
  }

  return table;
}

function memoize (target, name, descriptor) {
  const { get } = descriptor;

  descriptor.get = function() {
    const table = tableFor(this);

    if (name in table) {
      console.log('getting memoized value');
      return table[name];
    }

    console.log('getting initial value');
    return table[name] = this::get();
  };
}

export default memoize;
