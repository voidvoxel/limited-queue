# `@voidvoxel/limited-queue`

A queue with a limited amount of slots.

## Installation

```sh
npm i limited-queue
```

## Usage

### Basic usage

```js
// Import the library.
import LimitedQueue from "@voidvoxel/limited-queue";

// Create a new queue with a capacity of 3.
const queue = new LimitedQueue(3);

// Push 5 values.
queue.push(1, 2, 3, 4, 5);

// Log the queue's contents.
console.log(queue);

// Expected output:
// LimitedQueue(3) [ 3, 4, 5 ]
```

### Process overflow values

```js
// Import the library.
import LimitedQueue from "@voidvoxel/limited-queue";

const extras = [];

class OverflowQueue {
    _overflow (value) {
        extras.push(value);
    }
}

// Create a new queue with a capacity of 3.
const queue = new OverflowQueue(3);

// Push 5 values.
queue.push(1, 2, 3, 4, 5);

// Log the queue's contents.
console.log(extras);

// Expected output:
// [ 1, 2 ]
```
