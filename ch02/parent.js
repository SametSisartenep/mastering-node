var cp = require('child_process');
var child = cp.fork(__dirname + '/lovechild.js');

child.on('message', function ( msg ) {
  console.log('Child said: ' + msg);
});

child.send('I love you');
