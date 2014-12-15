setInterval(function () {}, 1e6);

console.log('waiting...');

process.on('SIGUSR1', function () {
  console.log('Got a signal!');
  process.exit(0);
});
