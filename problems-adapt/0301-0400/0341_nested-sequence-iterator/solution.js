class NestedSequenceIterator {
    constructor(nestedList) {
        this.values = [];
        const walk = (item) => {
            if (item.isInteger()) {
                this.values.push(item.getInteger());
                return;
            }
            for (const child of item.getList()) walk(child);
        };
        for (const item of nestedList.getList()) walk(item);
        this.cursor = 0;
    }

    nextValue() {
        return this.values[this.cursor++];
    }

    hasMore() {
        return this.cursor < this.values.length;
    }
}
