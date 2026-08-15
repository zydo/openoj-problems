function maxScore(edges: number[][]): number {
    const n = edges.length;
    if (n === 1) return 0;
    const children: number[][] = Array.from({ length: n }, () => []);
    for (let i = 1; i < n; i++) {
        children[edges[i][0]].push(i);
    }
    const order: number[] = [];
    const stack: number[] = [0];
    while (stack.length) {
        const u = stack.pop()!;
        order.push(u);
        for (const c of children[u]) stack.push(c);
    }
    const dp0 = new Array<number>(n).fill(0);
    const dp1 = new Array<number>(n).fill(0);
    for (let oi = order.length - 1; oi >= 0; oi--) {
        const u = order[oi];
        let base = 0;
        let bestGain = 0;
        for (const c of children[u]) {
            const w = edges[c][1];
            base += dp0[c];
            const gain = dp1[c] + w - dp0[c];
            if (gain > bestGain) bestGain = gain;
        }
        dp0[u] = base + bestGain;
        dp1[u] = base;
    }
    return dp0[0];
}
