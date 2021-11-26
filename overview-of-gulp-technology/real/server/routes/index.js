const routes = {
  '/date': (channel, data) => {
    console.log('/date', channel.id, data);
    channel.send('accepted');
  },
  '/auth': (channel, data) => {
    console.log('\n', '/auth', data);
  },
};

module.exports = { routes };
