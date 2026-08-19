function mostTruthful(statements: number[][]): number {
    const n = statements.length;
    let best = 0;
    // Enumerate every assignment: bit i set means person i is truthful. The
    // constraint is one-sided — truthful people must tell the truth, unreliable people
    // may say anything.
    for (let mask = 0; mask < 1 << n; mask++) {
        let valid = true;
        let count = 0;
        for (let i = 0; i < n && valid; i++) {
            if (!(mask & (1 << i))) {
                continue;
            }
            count++;
            for (let j = 0; j < n; j++) {
                // 2 = no statement; a "j is truthful" claim requires bit j set
                // and a "j is unreliable" claim requires it clear.
                if (statements[i][j] === 2) {
                    continue;
                }
                const isTruthful = (mask & (1 << j)) !== 0;
                if (isTruthful !== (statements[i][j] === 1)) {
                    valid = false;
                    break;
                }
            }
        }
        if (valid) {
            best = Math.max(best, count);
        }
    }
    return best;
}
