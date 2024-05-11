// import LimitedQueue from "limited-queue";
import LimitedQueue from "../src/LimitedQueue.mjs";


test(
    "create a new instance",
    () => {
        const queue = new LimitedQueue(3);

        expect(
            queue instanceof LimitedQueue
        ).toBe(
            true
        );
    }
);


test(
    "push values",
    () => {
        const queue = new LimitedQueue(3);

        queue.push(1, 2, 3, 4, 5);

        expect(queue.length).toBe(3);

        expect(queue[0]).toBe(3);
        expect(queue[1]).toBe(4);
        expect(queue[2]).toBe(5);
    }
);


test(
    "shift the next value",
    () => {
        const queue = new LimitedQueue(3);

        queue.push(1, 2, 3, 4, 5);

        const q0 = queue.shift();
        const q1 = queue.shift();
        const q2 = queue.shift();

        expect(q0).toBe(3);
        expect(q1).toBe(4);
        expect(q2).toBe(5);
    }
);


test(
    "process overflow values",
    () => {
        const overflow = [];

        class OverflowQueue extends LimitedQueue {
            _overflow (value) {
                overflow.push(value);
            }
        }

        const queue = new OverflowQueue(3);

        queue.push(1, 2, 3, 4, 5);

        expect(overflow[0]).toBe(1);
        expect(overflow[1]).toBe(2);
    }
);
