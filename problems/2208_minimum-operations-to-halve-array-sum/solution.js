/**
 * @param {number[]} nums
 * @return {number}
 */
var halveArray = function (nums) {
    function siftDown(heap, i, n) {
        while (true) {
            let largest = i;
            const l = 2 * i + 1,
                r = 2 * i + 2;
            if (l < n && heap[l] > heap[largest]) largest = l;
            if (r < n && heap[r] > heap[largest]) largest = r;
            if (largest === i) break;
            [heap[i], heap[largest]] = [heap[largest], heap[i]];
            i = largest;
        }
    }

    const heap = nums.map((x) => x);
    const n = heap.length;
    for (let i = (n >> 1) - 1; i >= 0; i--) siftDown(heap, i, n);
    let target = nums.reduce((a, b) => a + b, 0) / 2;
    let ops = 0;
    while (target > 0) {
        const largest = heap[0];
        const half = largest / 2;
        target -= half;
        heap[0] = half;
        siftDown(heap, 0, n);
        ops++;
    }
    return ops;
};
