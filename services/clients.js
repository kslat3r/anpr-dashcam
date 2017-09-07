const clients = {};

module.exports = {
  add: (client) => {
    console.log(client.id);

    clients[client.id] = client;
  },

  remove: (client) => {
    console.log(client.id);

    delete clients[client.id];
  },

  emit: (event, data) => {
    Object.keys(clients).forEach((key) => {
      clients[key].emit(event, data);
    });
  },
};
