const { sleep } = require('./sleep');
const someTick = async () => console.log('tick');

async function runExample() {
  await someTick();
  await sleep(50); // if such operation happens first - it works.
  return 'done';
}

test('should work', async () => {
  jest.useFakeTimers('modern');

  const result = runExample();

  console.log('count:', jest.getTimerCount());
  jest.runAllTimers();
  jest.advanceTimersByTime(100);

  await result;

  console.log('count:', jest.getTimerCount());
});
