function putMarbles(weights: number[], k: number): number {
    if (k === 1) {
        return 0;
    }
    const n = weights.length;
    const adj: number[] = [];
    for (let i = 0; i + 1 < n; i++) {
        adj.push(weights[i] + weights[i + 1]);
    }
    adj.sort((a, b) => a - b);
    const m = k - 1;
    let ans = 0;
    for (let i = 0; i < m; i++) {
        ans += adj[n - 2 - i] - adj[i];
    }
    return ans;
}
