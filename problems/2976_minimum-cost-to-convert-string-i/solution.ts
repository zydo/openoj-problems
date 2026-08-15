function minimumCost(
    source: string,
    target: string,
    original: string[],
    changed: string[],
    cost: number[],
): number {
    const INF = Infinity;
    const dist: number[][] = [];
    for (let i = 0; i < 26; i++) {
        dist.push(new Array(26).fill(INF));
        dist[i][i] = 0;
    }
    for (let e = 0; e < original.length; e++) {
        const a = original[e].charCodeAt(0) - 97;
        const b = changed[e].charCodeAt(0) - 97;
        if (cost[e] < dist[a][b]) dist[a][b] = cost[e];
    }
    for (let m = 0; m < 26; m++) {
        const row = dist[m];
        for (let i = 0; i < 26; i++) {
            const di = dist[i];
            const dim = di[m];
            if (dim === INF) continue;
            for (let j = 0; j < 26; j++) {
                const nd = dim + row[j];
                if (nd < di[j]) di[j] = nd;
            }
        }
    }
    let total = 0;
    for (let p = 0; p < source.length; p++) {
        const s = source.charCodeAt(p) - 97;
        const t = target.charCodeAt(p) - 97;
        if (s === t) continue;
        const d = dist[s][t];
        if (d === INF) return -1;
        total += d;
    }
    return total;
}
