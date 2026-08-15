/**
 * @param {number[]} apples
 * @param {number[]} days
 * @return {number}
 */
var eatenApples = function (apples, days) {
    const heap = [];
    const less = (a, b) => a[0] - b[0] || a[1] - b[1];
    const push = (item) => {
        heap.push(item);
        let i = heap.length - 1;
        while (i > 0) {
            const p = (i - 1) >> 1;
            if (less(heap[p], heap[i]) <= 0) break;
            const t = heap[p];
            heap[p] = heap[i];
            heap[i] = t;
            i = p;
        }
    };
    const pop = () => {
        const top = heap[0];
        const last = heap.pop();
        if (heap.length > 0) {
            heap[0] = last;
            let i = 0;
            for (;;) {
                const l = 2 * i + 1;
                const r = l + 1;
                let m = i;
                if (l < heap.length && less(heap[l], heap[m]) < 0) m = l;
                if (r < heap.length && less(heap[r], heap[m]) < 0) m = r;
                if (m === i) break;
                const t = heap[i];
                heap[i] = heap[m];
                heap[m] = t;
                i = m;
            }
        }
        return top;
    };
    const n = apples.length;
    let eaten = 0;
    for (let i = 0; i < n; i++) {
        if (apples[i] > 0) {
            push([i + days[i], apples[i]]);
        }
        while (heap.length && heap[0][0] <= i) {
            pop();
        }
        if (heap.length) {
            const item = pop();
            eaten += 1;
            if (item[1] > 1) {
                push([item[0], item[1] - 1]);
            }
        }
    }
    let day = n;
    while (heap.length) {
        while (heap.length && heap[0][0] <= day) {
            pop();
        }
        if (!heap.length) {
            break;
        }
        const item = pop();
        eaten += 1;
        if (item[1] > 1) {
            push([item[0], item[1] - 1]);
        }
        day += 1;
    }
    return eaten;
};
