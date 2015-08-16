function *createRequester() {
  let i = 0;

  while (true) {
    yield new Promise((resolve) => {
      const j = i++;
      setTimeout(() => {
        // console.log('fulfill', j);
        resolve(j)
      }, 2000);
    });
  }
}

async function main1() {
  const start = Date.now();
  const requester = createRequester();
  
  for (let i = 0; i < 3; i++) {
    await requester.next().value;
    //console.log(await requester.next().value);
    //console.log('requested', i);
  }
  console.log('main1:', Date.now() - start);
}

async function main2() {
  const start = Date.now();
  const requester = createRequester();
  const promises = [];
  
  for (let i = 0; i < 3; i++) {
    promises.push(requester.next().value);
    //console.log('requested', i);
  }
  
  await Promise.all(promises);
  console.log('main2:', Date.now() - start);
}

async function main3() {
  const start = Date.now();
  const requester = createRequester();
  await* Array.from([,,,], () => requester.next().value);
  console.log('main3:', Date.now() - start);
}

main1();
main2();
main3();

// async function baz() {
//   return 'hello world';
// }

// let value = bar();

// console.log('value 1', value);
// value.then(v => console.log('value 2', v));

// baz().then(v => console.log('baz', v));
