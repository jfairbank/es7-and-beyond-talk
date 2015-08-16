import eventLib from 'eventLib';

eventLib.on('foo', ::this.gotFoo);
eventLib.on('bar', ::this.gotBar);
eventLib.on('log', ::console.log);
