const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const clientsService = require('./services/clients');
const photoFacade = require('./facades/photo');

const app = express();

// static

app.use('/app', express.static(__dirname + '/client/build'));

// server and io

const server = http.createServer(app);
const io = socketio(server);

// add to clients on connection

io.on('connection', (client) => {
  clientsService.add(client);

  client.on('disconnect', () => {
    clientsService.remove(client);
  });
});

// let's go

photoFacade();

server.listen(3000);
