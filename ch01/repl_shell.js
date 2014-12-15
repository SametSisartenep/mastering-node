var repl = require('repl');

repl.start('>>> ').context.sayHello = function () {
  return 'Hello';
};