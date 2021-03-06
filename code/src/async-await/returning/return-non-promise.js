const assert = ::console.assert;

function life() {
  return Promise.resolve(42);
}

const answer = life();

assert(answer !== 42);
assert(answer instanceof Promise);

answer.then(value => assert(value === 42));
