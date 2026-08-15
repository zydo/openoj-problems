function minimumTimeRequired(jobs: number[], k: number): number {
    const sorted = jobs.slice().sort((a, b) => b - a);
    const n = sorted.length;
    let best = 0;
    for (const j of sorted) best += j;
    const loads: number[] = new Array(k).fill(0);

    const dfs = (i: number): void => {
        if (i === n) {
            let current = 0;
            for (const l of loads) {
                if (l > current) current = l;
            }
            if (current < best) best = current;
            return;
        }
        const seen = new Set<number>();
        for (let w = 0; w < k; w++) {
            if (seen.has(loads[w])) continue;
            seen.add(loads[w]);
            if (loads[w] + sorted[i] >= best) continue;
            loads[w] += sorted[i];
            dfs(i + 1);
            loads[w] -= sorted[i];
            if (loads[w] === 0) break;
        }
    };

    dfs(0);
    return best;
}
