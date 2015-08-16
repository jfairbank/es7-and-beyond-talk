const assert = ::console.assert;

async function life() {
  return 42;
}

const answer = life();

assert(answer !== 42);
assert(answer instanceof Promise);

answer.then(::console.log);
