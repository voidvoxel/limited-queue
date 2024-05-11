export default class LimitedQueue extends Array {
    #capacity


    constructor (capacity) {
        super(0);

        this.setCapacity(capacity);
    }


    getCapacity () {
        return this.#capacity;
    }


    push (...values) {
        super.push(...values);

        while (this.length > this.getCapacity()) {
            const overflow = super.shift();

            this._overflow(overflow);
        }

        return this.length;
    }


    setCapacity (capacity) {
        this.#capacity = capacity;
    }


    _overflow (value) {
        return value;
    }
}
