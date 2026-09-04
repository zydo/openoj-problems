function boundedFinalScoreProbability(scoreLimit: number, stopScore: number, drawMaximum: number): number {
    if (stopScore === 0 || scoreLimit >= stopScore - 1 + drawMaximum) {
        return 1.0;
    }
    // dp[i] = probability of ever holding exactly i points.
    const dp: number[] = new Array(scoreLimit + 1).fill(0.0);
    dp[0] = 1.0;
    let window = 1.0; // sum of dp[max(0, i - drawMaximum) .. i - 1]
    for (let i = 1; i <= scoreLimit; i++) {
        dp[i] = window / drawMaximum;
        if (i < stopScore) {
            window += dp[i];
        }
        if (i - drawMaximum >= 0) {
            window -= dp[i - drawMaximum];
        }
    }
    // Compensated (Neumaier) summation, matching the reference's built-in sum().
    let result = 0.0;
    let c = 0.0;
    for (let i = stopScore; i <= scoreLimit; i++) {
        const x = dp[i];
        const t = result + x;
        if (Math.abs(result) >= Math.abs(x)) {
            c += result - t + x;
        } else {
            c += x - t + result;
        }
        result = t;
    }
    return result + c;
}
