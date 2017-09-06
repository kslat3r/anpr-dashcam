const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const clientsService = require('./services/clients');

const app = express();

app.use('/app', express.static(__dirname + '/client/build'));

const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (client) => {
  clientsService.add(client);

  client.on('disconnect', () => {
    clientsService.remove(client);
  });
});


server.listen(process.env.PORT || 3000);
