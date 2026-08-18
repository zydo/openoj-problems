function apportion(scores: number[]): number {
    const n = scores.length;
    // A weight of one everywhere is the floor the rules allow.
    const weights: number[] = new Array(n).fill(1);
    // Left-to-right: satisfy the left-hand rule with the smallest value
    // that clears the position on the left.
    for (let i = 1; i < n; i++) {
        if (scores[i] > scores[i - 1]) {
            weights[i] = weights[i - 1] + 1;
        }
    }
    // Right-to-left: the mirror rule. Taking a max only raises a weight,
    // so this sweep cannot break what the first settled.
    for (let i = n - 2; i >= 0; i--) {
        if (scores[i] > scores[i + 1]) {
            weights[i] = Math.max(weights[i], weights[i + 1] + 1);
        }
    }
    let total = 0;
    for (const value of weights) {
        total += value;
    }
    return total;
}
