function minimumLimitedRouteCost(nodeCount: number, links: number[][], source: number, target: number, maxIntermediates: number): number {
    const INF = Infinity;
    // After r full rounds, dist[v] is the cheapest cost using at
    // most r edges; maxIntermediates internal nodes allow maxIntermediates+1 links, so run maxIntermediates+1 rounds.
    let dist: number[] = new Array(nodeCount).fill(INF);
    dist[source] = 0;
    for (let i = 0; i < maxIntermediates + 1; i++) {
        // Relax from a frozen copy: writing in place would chain
        // several edges inside one round and exceed the stop limit.
        const ndist = dist.slice();
        let changed = false;
        for (const [f, t, weight] of links) {
            if (dist[f] + weight < ndist[t]) {
                ndist[t] = dist[f] + weight;
                changed = true;
            }
        }
        dist = ndist;
        // A round that changed nothing never improves later rounds.
        if (!changed) break;
    }
    // A surviving infinity means the destination is unreachable
    // within the allowance.
    return dist[target] === INF ? -1 : dist[target];
}
