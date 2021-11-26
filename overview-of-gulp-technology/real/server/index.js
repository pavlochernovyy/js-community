const server = require('http').createServer();
const socket = require('socket.io')(server, {
  cors: {
    origin: '*',
  },
});

const { routes } = require('./routes');

socket.on('connection', (channel) => {
  console.log(`client of channel ${channel.id} connected to server`);
  channel.on('message', (route, data) => {
    routes[route](channel, data);
  });
});

server.listen(3000, () => {
  console.log('socket server is listening');
});
