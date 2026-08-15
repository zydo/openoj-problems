/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var maxScore = function (nums1, nums2, k) {
    const n = nums1.length;
    const idx = Array.from({ length: n }, (_, i) => i);
    // stable sort by nums2 descending
    const merged = idx.map((v, i) => [nums2[v], v]);
    merged.sort((x, y) => y[0] - x[0]);
    const heap = [];
    const push = (v) => {
        heap.push(v);
        let i = heap.length - 1;
        while (i > 0) {
            const p = (i - 1) >> 1;
            if (heap[p] <= heap[i]) break;
            [heap[p], heap[i]] = [heap[i], heap[p]];
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
                let l = 2 * i + 1,
                    r = 2 * i + 2,
                    m = i;
                if (l < heap.length && heap[l] < heap[m]) m = l;
                if (r < heap.length && heap[r] < heap[m]) m = r;
                if (m === i) break;
                [heap[m], heap[i]] = [heap[i], heap[m]];
                i = m;
            }
        }
        return top;
    };
    let total = 0;
    let best = 0;
    for (const [, j] of merged) {
        const a = nums1[j];
        push(a);
        total += a;
        if (heap.length > k) {
            total -= pop();
        }
        if (heap.length === k) {
            const b = total * nums2[j];
            if (b > best) best = b;
        }
    }
    return best;
};
