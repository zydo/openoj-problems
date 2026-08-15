function findMaximizedCapital(
    k: number,
    w: number,
    profits: number[],
    capital: number[],
): number {
    const n = profits.length;
    const projects: number[][] = [];
    for (let i = 0; i < n; i++) projects.push([capital[i], profits[i]]);
    projects.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
    // max-heap of profits
    const heap: number[] = [];
    const push = (v: number): void => {
        heap.push(v);
        let i = heap.length - 1;
        while (i > 0) {
            const p = (i - 1) >> 1;
            if (heap[p] >= heap[i]) break;
            [heap[p], heap[i]] = [heap[i], heap[p]];
            i = p;
        }
    };
    const pop = (): number => {
        const top = heap[0];
        const last = heap.pop()!;
        if (heap.length) {
            heap[0] = last;
            let i = 0;
            for (;;) {
                const l = 2 * i + 1,
                    r = l + 1;
                let s = i;
                if (l < heap.length && heap[l] > heap[s]) s = l;
                if (r < heap.length && heap[r] > heap[s]) s = r;
                if (s === i) break;
                [heap[s], heap[i]] = [heap[i], heap[s]];
                i = s;
            }
        }
        return top;
    };
    let index = 0;
    let current = w;
    const limit = Math.min(k, n);
    for (let iter = 0; iter < limit; iter++) {
        while (index < n && projects[index][0] <= current) {
            push(projects[index][1]);
            index++;
        }
        if (heap.length === 0) break;
        current += pop();
    }
    return current;
}
