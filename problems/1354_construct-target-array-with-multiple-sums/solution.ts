function isPossible(target: number[]): boolean {
    const n = target.length;
    if (n === 1) {
        return target[0] === 1;
    }
    const heap: number[] = [];
    const push = (v: number): void => {
        heap.push(v);
        let i = heap.length - 1;
        while (i > 0) {
            const p = (i - 1) >> 1;
            if (heap[p] >= heap[i]) {
                break;
            }
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
                let big = i;
                if (l < heap.length && heap[l] > heap[big]) {
                    big = l;
                }
                if (r < heap.length && heap[r] > heap[big]) {
                    big = r;
                }
                if (big === i) {
                    break;
                }
                const t = heap[i];
                heap[i] = heap[big];
                heap[big] = t;
                i = big;
            }
        }
        return top;
    };
    let total = 0;
    for (const v of target) {
        total += v;
        push(v);
    }
    for (;;) {
        const largest = pop();
        if (largest === 1) {
            return true;
        }
        const rest = total - largest;
        if (largest <= rest) {
            return false;
        }
        const steps = Math.floor((largest - 1) / rest);
        const prev = largest - steps * rest;
        push(prev);
        total = rest + prev;
    }
}
