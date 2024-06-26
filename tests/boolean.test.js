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

        queue.push(false, false, true, false, true);

        expect(queue.length).toBe(3);

        expect(queue[0]).toBe(true);
        expect(queue[1]).toBe(false);
        expect(queue[2]).toBe(true);
    }
);


test(
    "shift the next value",
    () => {
        const queue = new LimitedQueue(3);

        queue.push(false, false, true, false, true);

        const q0 = queue.shift();
        const q1 = queue.shift();
        const q2 = queue.shift();

        expect(q0).toBe(true);
        expect(q1).toBe(false);
        expect(q2).toBe(true);
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

        queue.push(false, false, true, false, true);

        expect(overflow[0]).toBe(false);
        expect(overflow[1]).toBe(false);
    }
);
