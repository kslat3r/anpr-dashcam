import io from 'socket.io-client';

let socket;

const connect = () => {
  if (!socket) {
    socket = io('http://localhost:3000');
  }
}

export function bind(event, cb) {
  connect();

  socket.on(event, cb);
}
