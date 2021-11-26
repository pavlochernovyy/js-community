import { displayTime } from './time';

console.log('in progress');
const timer = setInterval(displayTime, 1000);

setTimeout(() => {
  clearInterval(timer);
  console.log('done');
}, 3000);
