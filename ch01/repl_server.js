var net = require('net'),
  repl = require('repl');

net.createServer(function ( socket ) {
  repl.start({
    prompt: '>>> ',
    input: socket,
    output: socket,
    terminal: true
  }).on('exit', function () {
    socket.end();
  });
}).listen(8080, function () {
  console.log('server listening => 127.0.0.1:8080');
});
