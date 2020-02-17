const clients = {};

module.exports = {
  add: (client) => {
    clients[client.id] = client;
  },

  remove: (client) => {
    delete clients[client.id];
  },

  emit: (event, data) => {
    Object.keys(clients).forEach((key) => {
      clients[key].emit(event, data);
    });
  },
};
