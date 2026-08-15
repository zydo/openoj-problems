function maxScore(cardPoints: number[], k: number): number {
    const n = cardPoints.length;
    let total = 0;
    for (const value of cardPoints) {
        total += value;
    }
    const window = n - k;
    let current = 0;
    for (let i = 0; i < window; i++) {
        current += cardPoints[i];
    }
    let best = current;
    for (let i = window; i < n; i++) {
        current += cardPoints[i] - cardPoints[i - window];
        if (current < best) {
            best = current;
        }
    }
    return total - best;
}
