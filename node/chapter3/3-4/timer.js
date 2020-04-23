const timeout = setTimeout(() => console.log('after 1.5s'), 1500);

const interval = setInterval(() => console.log('repeat 1s'), 1000);

const timeout2 = setTimeout(() => console.log('not running'), 3000);

setTimeout(() => {
  clearTimeout(timeout2);
  clearInterval(interval);
}, 2500);

const immediate = setImmediate(() => console.log('run immediately'));

const immediate2 = setImmediate(() => console.log('not running'))

clearImmediate(immediate2);
