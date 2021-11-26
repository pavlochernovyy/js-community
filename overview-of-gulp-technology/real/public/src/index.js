const client = require('socket.io-client');

let clients = 2;
while (clients > 0) {
  clients -= 1;
  setTimeout(() => {
    const channel = client.connect('/* @echo ENDPOINT_PATH */');
    const execute = () => {
      channel.send('/date', { dates: [Date.now()] });
      channel.send('/auth', { scope: ['user'] });
    };
    const getData = (data) => {
      console.log(`on client at channel ${channel.id}`, data);
    };
    channel.on('message', getData);
    setInterval(execute, 500);
  }, 100);
}
