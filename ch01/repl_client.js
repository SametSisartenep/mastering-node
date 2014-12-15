var net = require('net');

var sock = net.connect(8080);

process.stdin.pipe(sock);
sock.pipe(process.stdout);
