import io from 'socket.io-client';

let socket;

const connect = () => {
  if (!socket) {
    socket = io('http://localhost:4000');
  }
}

export function bind(event, cb) {
  connect();

  socket.on(event, cb);
}
