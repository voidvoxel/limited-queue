const LimitedQueue = require('..');

const queue = new LimitedQueue(3);

queue.push(1, 2, 3, 4, 5);

console.log(queue.shift() === 4 && queue.shift() === 5);
