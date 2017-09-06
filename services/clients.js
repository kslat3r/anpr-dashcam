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

  get: () => {
    return Object.keys(clients).map((key) => {
      return clients[key];
    });
  },
};
