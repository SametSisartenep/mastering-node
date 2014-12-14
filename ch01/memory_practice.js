var fs = require('fs'),
  Readable = require('stream').Readable;

var size = process.argv[2],
  total = process.argv[3];

var readable = new Readable();

var writable = fs.createWriteStream('./memory.info', {
  flags: 'w',
  mode: 0666
});

var buff = [];
var count = 0;

readable._read = function () {
  if (++count > total) {
    readable.push(null);
  } else {
    buff.push(new Buffer(size));
    readable.push(process.memoryUsage().heapTotal + '\n');
  }
};

readable.pipe(writable);
