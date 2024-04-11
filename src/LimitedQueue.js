class LimitedQueue extends Array {
    constructor (capacity) {
        super(capacity);

        this.setCapacity(capacity);
    }

    getCapacity () {
        return this._capacity;
    }

    push (...values) {
        super.push(...values);

        while (this.length >= this.getCapacity()) {
            this.shift();
        }
    }

    setCapacity (capacity) {
        this._capacity = capacity;
    }
}

module.exports = LimitedQueue;
