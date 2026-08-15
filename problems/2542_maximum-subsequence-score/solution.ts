function maxScore(nums1: number[], nums2: number[], k: number): number {
    const n = nums1.length;
    const merged: [number, number][] = [];
    for (let i = 0; i < n; i++) merged.push([nums2[i], i]);
    merged.sort((x, y) => y[0] - x[0]);
    const heap: number[] = [];
    const push = (v: number): void => {
        heap.push(v);
        let i = heap.length - 1;
        while (i > 0) {
            const p = (i - 1) >> 1;
            if (heap[p] <= heap[i]) break;
            [heap[p], heap[i]] = [heap[i], heap[p]];
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
}
