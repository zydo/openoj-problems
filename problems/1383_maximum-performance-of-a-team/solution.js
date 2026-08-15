/**
 * @param {number} n
 * @param {number[]} speed
 * @param {number[]} efficiency
 * @param {number} k
 * @return {number}
 */
var maxPerformance = function (n, speed, efficiency, k) {
    const MOD = 1000000007n;
    const engineers = [];
    for (let i = 0; i < n; i++) {
        engineers.push([efficiency[i], speed[i]]);
    }
    engineers.sort((a, b) => b[0] - a[0] || b[1] - a[1]);
    const heap = [];
    const push = (v) => {
        heap.push(v);
        let i = heap.length - 1;
        while (i > 0) {
            const p = (i - 1) >> 1;
            if (heap[p] <= heap[i]) {
                break;
            }
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
                let small = i;
                if (l < heap.length && heap[l] < heap[small]) {
                    small = l;
                }
                if (r < heap.length && heap[r] < heap[small]) {
                    small = r;
                }
                if (small === i) {
                    break;
                }
                const t = heap[i];
                heap[i] = heap[small];
                heap[small] = t;
                i = small;
            }
        }
        return top;
    };
    let speedSum = 0;
    let best = 0n;
    for (const [eff, spd] of engineers) {
        push(spd);
        speedSum += spd;
        if (heap.length > k) {
            speedSum -= pop();
        }
        const perf = BigInt(speedSum) * BigInt(eff);
        if (perf > best) {
            best = perf;
        }
    }
    return Number(best % MOD);
};
