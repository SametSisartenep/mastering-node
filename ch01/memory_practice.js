var size = process.argv[2],
  total = process.argv[3];

var buff = [];

for (var i = 0; i < total; i++) {
  buff.push(new Buffer(size));
  require('util').log(process.memoryUsage().heapTotal + '\n');
}