const program = process.argv[2];

function mockRequest(url, respTime) {
  return new Promise(resolve => setTimeout(resolve, respTime));
}

const resourceTimer = {
  generateResources(prefix) {
    return this.timedResources([
      { prefix, url: '/foo', respTime: 1000 },
      { prefix, url: '/bar', respTime: 6000 },
      { prefix, url: '/baz', respTime: 2000 }
    ]);
  },

  timedResources(resources) {
    resources.forEach(::this.startWaitTime);

    return resources;
  },

  startTimer({ prefix, url }, type) {
    console.time(`${prefix}:${url} ${type}`);
  },

  stopTimer({ prefix, url }, type) {
    console.timeEnd(`${prefix}:${url} ${type}`);
  },

  startWaitTime(resource) {
    this.startTimer(resource, 'wait');
  },

  stopWaitTime(resource) {
    this.stopTimer(resource, 'wait');
  },

  startResponseTime(resource) {
    this.startTimer(resource, 'response');
  },

  stopResponseTime(resource) {
    this.stopTimer(resource, 'response');
  }
};

async function time(name, fn) {
  console.time(`${name} total`);
  await fn();
  console.timeEnd(`${name} total`);
}

async function sequential(resources) {
  for (const resource of resources) {
    resourceTimer.stopWaitTime(resource);
    resourceTimer.startResponseTime(resource);
    await mockRequest(resource.url, resource.respTime);
    resourceTimer.stopResponseTime(resource);
  }
}

async function parallel(resources) {
  await* resources.map(resource => {
    resourceTimer.stopWaitTime(resource);
    resourceTimer.startResponseTime(resource);
    return mockRequest(resource.url, resource.respTime)
      .then(() => resourceTimer.stopResponseTime(resource));
  });
}

switch(program) {
  case 'parallel':
    time('parallel', () => {
      return parallel(resourceTimer.generateResources('parallel'));
    });

    break;

  case 'sequential':
  default:
    time('sequential', () => {
      return sequential(resourceTimer.generateResources('sequential'));
    });
}
