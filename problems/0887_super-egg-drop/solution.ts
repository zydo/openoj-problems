function superEggDrop(k: number, n: number): number {
    const dp = new Array<number>(k + 1).fill(0);
    let moves = 0;
    while (dp[k] < n) {
        moves++;
        for (let e = k; e >= 1; e--) {
            dp[e] = dp[e - 1] + dp[e] + 1;
        }
    }
    return moves;
}
