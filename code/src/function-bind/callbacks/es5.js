var eventLib = require('eventLib');
var self = this;

eventLib.on('foo', function() {
  self.gotFoo();
});

eventLib.on('bar', this.gotBar.bind(this));
eventLib.on('log', console.log.bind(console));
