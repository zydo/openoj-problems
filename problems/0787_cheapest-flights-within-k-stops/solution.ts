function findCheapestPrice(
    n: number,
    flights: number[][],
    src: number,
    dst: number,
    k: number,
): number {
    const INF = Infinity;
    let dist: number[] = new Array(n).fill(INF);
    dist[src] = 0;
    for (let i = 0; i < k + 1; i++) {
        const ndist = dist.slice();
        let changed = false;
        for (const [f, t, price] of flights) {
            if (dist[f] + price < ndist[t]) {
                ndist[t] = dist[f] + price;
                changed = true;
            }
        }
        dist = ndist;
        if (!changed) break;
    }
    return dist[dst] === INF ? -1 : dist[dst];
}
