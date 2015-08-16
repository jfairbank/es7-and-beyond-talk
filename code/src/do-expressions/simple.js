const foo = do {
  const x = 'b';
  const y = 'a';
  const z = 'r';

  x + y + z;
};

console.log(foo); // bar

console.log(do { const x = 21; x * 2; }); // 42
