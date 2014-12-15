var EventEmitter = require('events').EventEmitter;

var Counter = function ( count ) {
  this.count = count || 0;
  this.half = (1.5 * count) || 0;
  this.whole = (2 * count) || 0;
};

Counter.prototype = new EventEmitter();
Counter.prototype.increment = function () {
  this.count++;
  if (this.count === this.half) {
    this.emit('half', this.count);
  } else if (this.count === this.whole) {
    this.emit('whole', this.whole);
  }
  this.emit('incremented', this.count);
};

var counter = new Counter(10);

counter.on('incremented', function ( count ) {
  console.log('Value incremented: ' + count);
});

counter.on('half', function ( number ) {
  console.log('Value has reached half: ' + number);
});

counter.on('whole', function ( number ) {
  console.log('It has reached the whole value: ' + number);
});

counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
