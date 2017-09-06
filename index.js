const io = require('socket.io')();

io.on('connection', () => {
  console.log('Client connected');
});

io.listen(process.env.PORT || 3000);
