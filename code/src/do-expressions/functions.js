const query = 'foo=bar&baz=quux&hello=world';

const params = query.split('&')
  .reduce((memo, entry) => do {
    const [key, value] = entry.split('=');
    memo[key] = value;
    memo;
  }, {});

console.log(params); // { foo: 'bar',
                     //   baz: 'quux',
                     //   hello: 'world' }
