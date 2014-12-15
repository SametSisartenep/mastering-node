setInterval(function () {}, 1e6);

process.on('SIGINT', function () {
  console.log('SIGINT signal received.');
  process.exit(1);
});