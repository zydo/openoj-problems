function minimumDeviation(nums: number[]): number {
    const heap: number[] = [];
    const push = (v: number): void => {
        heap.push(v);
        let i = heap.length - 1;
        while (i > 0) {
            const p = (i - 1) >> 1;
            if (heap[p] >= heap[i]) break;
            const t = heap[p];
            heap[p] = heap[i];
            heap[i] = t;
            i = p;
        }
    };
    const pop = (): number => {
        const top = heap[0];
        const last = heap.pop() as number;
        if (heap.length > 0) {
            heap[0] = last;
            let i = 0;
            for (;;) {
                const l = 2 * i + 1;
                const r = l + 1;
                let m = i;
                if (l < heap.length && heap[l] > heap[m]) m = l;
                if (r < heap.length && heap[r] > heap[m]) m = r;
                if (m === i) break;
                const t = heap[i];
                heap[i] = heap[m];
                heap[m] = t;
                i = m;
            }
        }
        return top;
    };
    let currentMin = Infinity;
    for (const v of nums) {
        const m = v % 2 === 1 ? v * 2 : v;
        push(m);
        if (m < currentMin) currentMin = m;
    }
    let best = heap[0] - currentMin;
    while (heap[0] % 2 === 0) {
        const half = pop() / 2;
        push(half);
        if (half < currentMin) currentMin = half;
        const deviation = heap[0] - currentMin;
        if (deviation < best) best = deviation;
    }
    return best;
}
