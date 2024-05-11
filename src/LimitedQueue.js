class LimitedQueue extends Array {
    #capacity


    constructor (capacity) {
        super(capacity);

        this.setCapacity(capacity);
    }


    getCapacity () {
        return this.#capacity;
    }


    push (...values) {
        super.push(...values);

        while (this.length > this.getCapacity()) {
            this.shift();
        }
    }


    setCapacity (capacity) {
        this.#capacity = capacity;
    }
}


module.exports = LimitedQueue;
