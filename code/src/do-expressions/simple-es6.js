const foo = (() => {
  const x = 'b';
  const y = 'a';
  const z = 'r';

  return x + y + z;
})();

console.log(foo); // bar

console.log((() => {
  const x = 21;
  return x * 2;
})()); // bar
