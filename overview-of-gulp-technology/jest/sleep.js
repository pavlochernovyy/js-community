const sleep = (sleepMS) =>
  new Promise((resolve) => {
    setTimeout(resolve, sleepMS);
  });

module.exports = { sleep };
