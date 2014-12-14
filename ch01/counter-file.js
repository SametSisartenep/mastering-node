var Readable = require('stream').Readable;
var fs = require('fs');
var readable = new Readable();
var count = 0;

var writable = fs.createWriteStream('./counter.txt', {
  flags: 'w',
  mode: 0666
});

readable._read = function () {
  if (++count > 10) {
    readable.push(null);
  } else {
    setTimeout(function () {
      readable.push(count + '\n');
    }, 500);
  }
};

readable.pipe(writable);
