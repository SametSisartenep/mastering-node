var dgram = require('dgram');
var client = dgram.createSocket('udp4');
var server = dgram.createSocket('udp4');

var message = process.argv[2] || 'message';

message = new Buffer(message);

server.on('message', function ( msg ) {
  process.stdout.write('Got message: ' + msg + '\n');
  process.exit();
}).bind(41234);

client.send(message, 0, message.length, 41234, 'localhost');
