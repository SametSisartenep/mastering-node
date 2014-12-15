process.on('message', function ( msg ) {
  console.log('Parent said: ' + msg);
  process.send('I love you too. (or it\'s what you think....)');
});
