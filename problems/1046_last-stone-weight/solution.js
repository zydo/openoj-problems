/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
    const heap = new MaxHeap(stones);
    while (heap.size() > 1) {
        const y = heap.pop();
        const x = heap.pop();
        if (x !== y) {
            heap.push(y - x);
        }
    }
    return heap.size() ? heap.pop() : 0;
};

class MaxHeap {
    constructor(items) {
        this.a = items.slice();
        for (let i = (this.a.length >> 1) - 1; i >= 0; i--) this.siftDown(i);
    }
    size() {
        return this.a.length;
    }
    push(v) {
        this.a.push(v);
        let i = this.a.length - 1;
        while (i > 0) {
            const p = (i - 1) >> 1;
            if (this.a[p] >= this.a[i]) break;
            [this.a[p], this.a[i]] = [this.a[i], this.a[p]];
            i = p;
        }
    }
    pop() {
        const top = this.a[0];
        const last = this.a.pop();
        if (this.a.length) {
            this.a[0] = last;
            this.siftDown(0);
        }
        return top;
    }
    siftDown(i) {
        const n = this.a.length;
        while (true) {
            let l = 2 * i + 1,
                r = l + 1,
                m = i;
            if (l < n && this.a[l] > this.a[m]) m = l;
            if (r < n && this.a[r] > this.a[m]) m = r;
            if (m === i) break;
            [this.a[m], this.a[i]] = [this.a[i], this.a[m]];
            i = m;
        }
    }
}
