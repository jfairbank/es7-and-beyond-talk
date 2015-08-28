export default {
  generateResources(prefix) {
    return this.timedResources([
      { prefix, url: '/orders/1' },
      { prefix, url: '/orders/2' },
      { prefix, url: '/orders/3' }
    ]);
  },

  timedResources(resources) {
    resources.forEach(::this.startWaitTime);

    return resources;
  },

  startTimer({ prefix, url }, type) {
    console.time(`${prefix}: ${url} ${type}`);
  },

  stopTimer({ prefix, url }, type) {
    console.timeEnd(`${prefix}: ${url} ${type}`);
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
