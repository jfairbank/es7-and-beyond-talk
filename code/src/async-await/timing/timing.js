function fakeRequest(url, time) {
  return new Promise(resolve => {
    setTimeout(() => {
      const newUrl = url
        .replace(/^\//, '')
        .toUpperCase();

      resolve(newUrl);
    }, time);
  });
}

class Timer {
  static create(name, print) {
    return new Timer(name, print);
  }

  constructor(name, print = false) {
    this.name = name;
    this.print = print;
  }

  start() {
    this._start = Date.now();
  }

  stop() {
    const time = Date.now() - this._start;
    if (this.print) console.log(`${this.name} total time: ${time}ms`);
    return time;
  }
}

function avg(array) {
  return array.reduce((x, y) => x + y) / array.length;
}

const mockRequests = [
  { url: '/foo', time: 1000, timer: Timer.create('/foo') },
  { url: '/bar', time: 6000, timer: Timer.create('/bar') },
  { url: '/baz', time: 2000, timer: Timer.create('/baz') }
];

async function main1() {
  const respTimes = [];
  const timer = Timer.create('main1', true);
  timer.start();

  for (const mock of mockRequests) {
    mock.timer.start();
    const newUrl = await fakeRequest(mock.url, mock.time);
    const respTime = mock.timer.stop();
    respTimes.push(respTime);
    // console.log(newUrl);
  }

  timer.stop();

  const avgRespTime = avg(respTimes);
  console.log(`main1 average response time: ${avgRespTime}ms`);
}

async function main2() {
  const respTimes = [];
  const timer = Timer.create('main2', true);
  timer.start();

  const requests = mockRequests.map(mock => {
    mock.timer.start();
    const req = fakeRequest(mock.url, mock.time);
    req._mock = mock;
    return req;
  });

  for (const request of requests) {
    const newUrl = await request;
    const respTime = request._mock.timer.stop();
    respTimes.push(respTime);
    // console.log(newUrl);
  }

  timer.stop();

  const avgRespTime = avg(respTimes);
  console.log(`main2 average response time: ${avgRespTime}ms`);
}

async function main3() {
  const respTimes = [];
  const timer = Timer.create('main3', true);
  timer.start();

  const newUrls = await* mockRequests.map(mock => {
    mock.timer.start();
    return fakeRequest(mock.url, mock.time);
  });

  mockRequests.forEach(mock => {
    respTimes.push(mock.timer.stop());
  });

  // for (const newUrl of newUrls) {
  //   console.log(newUrl);
  // }

  timer.stop();

  const avgRespTime = avg(respTimes);
  console.log(`main3 average response time: ${avgRespTime}ms`);
}

main1();
main2();
main3();
