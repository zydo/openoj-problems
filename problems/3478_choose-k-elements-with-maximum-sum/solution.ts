function findMaxSum(nums1: number[], nums2: number[], k: number): number[] {
    const n = nums1.length;
    const indices = Array.from({ length: n }, (_, i) => i);
    indices.sort((a, b) => nums1[a] - nums1[b]);
    const heap: number[] = []; // min-heap of the selected top-k nums2 values
    let total = 0;
    const result: number[] = new Array(n).fill(0);

    const push = (val: number): void => {
        heap.push(val);
        let i = heap.length - 1;
        while (i > 0) {
            const p = (i - 1) >> 1;
            if (heap[p] <= heap[i]) break;
            const tmp = heap[p];
            heap[p] = heap[i];
            heap[i] = tmp;
            i = p;
        }
    };
    const pop = (): number => {
        const top = heap[0];
        const last = heap.pop()!;
        if (heap.length > 0) {
            heap[0] = last;
            let i = 0;
            for (;;) {
                const l = 2 * i + 1,
                    r = 2 * i + 2;
                let m = i;
                if (l < heap.length && heap[l] < heap[m]) m = l;
                if (r < heap.length && heap[r] < heap[m]) m = r;
                if (m === i) break;
                const tmp = heap[m];
                heap[m] = heap[i];
                heap[i] = tmp;
                i = m;
            }
        }
        return top;
    };

    let i = 0;
    while (i < n) {
        let j = i;
        while (j < n && nums1[indices[j]] === nums1[indices[i]]) j++;
        for (let t = i; t < j; t++) result[indices[t]] = total;
        for (let t = i; t < j; t++) {
            const val = nums2[indices[t]];
            if (heap.length < k) {
                push(val);
                total += val;
            } else if (val > heap[0]) {
                const removed = pop();
                push(val);
                total += val - removed;
            }
        }
        i = j;
    }
    return result;
}
