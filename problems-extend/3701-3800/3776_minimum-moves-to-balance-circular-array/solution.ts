function minMoves(balance: number[]): number {
    // The single negative person is the only sink; each positive person
    // is a source whose units cost their circular distance to the sink,
    // so the cheapest sources are drained first. The answer is at most
    // 1e9 * 5e4 = 5e13 < 2^53, exact as a JS number.
    let neg = -1;
    for (let i = 0; i < balance.length; i++) {
        if (balance[i] < 0) {
            neg = i;
            break;
        }
    }
    if (neg === -1) {
        return 0;
    }
    const total = balance.reduce((a, b) => a + b, 0);
    if (total < 0) {
        return -1;
    }
    const n = balance.length;
    let need = -balance[neg];
    const sources: Array<[number, number]> = [];
    for (let i = 0; i < n; i++) {
        if (i !== neg && balance[i] > 0) {
            const diff = Math.abs(i - neg);
            sources.push([Math.min(diff, n - diff), balance[i]]);
        }
    }
    sources.sort((a, b) => a[0] - b[0]);
    let moves = 0;
    for (const [d, v] of sources) {
        if (need === 0) {
            break;
        }
        const take = Math.min(v, need);
        moves += take * d;
        need -= take;
    }
    return moves;
}
