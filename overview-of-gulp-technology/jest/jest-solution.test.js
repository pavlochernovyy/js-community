const { sleep } = require('./sleep');

jest.mock('./sleep', () => ({
  sleep: jest.fn(() => jest.advanceTimersByTime(50)),
}));

const someTick = async () => console.log('tick');

async function runExample() {
  const timeout = Date.now() + 2000;
  while (Date.now() < timeout) {
    console.log('proceed');
    await someTick();
    await sleep(timeout);
  }
}

test('should work', async () => {
  jest.useFakeTimers('modern');
  await runExample();
});
