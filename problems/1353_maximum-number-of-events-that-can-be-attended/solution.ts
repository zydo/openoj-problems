function maxEvents(events: number[][]): number {
    const sorted = events
        .slice()
        .sort((a, b) => (a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]));
    const n = sorted.length;
    let i = 0;
    let day = 1;
    let attended = 0;
    // Min-heap of end days for currently open events.
    const heap: number[] = [];
    const push = (v: number): void => {
        heap.push(v);
        let c = heap.length - 1;
        while (c > 0) {
            const p = (c - 1) >> 1;
            if (heap[p] <= heap[c]) {
                break;
            }
            [heap[p], heap[c]] = [heap[c], heap[p]];
            c = p;
        }
    };
    const pop = (): number => {
        const top = heap[0];
        const last = heap.pop() as number;
        if (heap.length > 0) {
            heap[0] = last;
            let c = 0;
            for (;;) {
                const l = 2 * c + 1;
                const r = l + 1;
                let s = c;
                if (l < heap.length && heap[l] < heap[s]) {
                    s = l;
                }
                if (r < heap.length && heap[r] < heap[s]) {
                    s = r;
                }
                if (s === c) {
                    break;
                }
                [heap[c], heap[s]] = [heap[s], heap[c]];
                c = s;
            }
        }
        return top;
    };
    while (i < n || heap.length > 0) {
        if (heap.length === 0) {
            day = Math.max(day, sorted[i][0]);
        }
        while (i < n && sorted[i][0] <= day) {
            push(sorted[i][1]);
            i++;
        }
        while (heap.length > 0 && heap[0] < day) {
            pop();
        }
        if (heap.length > 0) {
            pop();
            attended++;
        }
        day++;
    }
    return attended;
}
