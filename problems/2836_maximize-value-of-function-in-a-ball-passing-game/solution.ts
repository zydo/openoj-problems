function getMaxFunctionValue(receiver: number[], k: number): number {
    const n = receiver.length;
    const log = k.toString(2).length; // bit length of k
    const up: number[][] = Array.from({ length: log }, () =>
        new Array(n).fill(0),
    );
    const sm: number[][] = Array.from({ length: log }, () =>
        new Array(n).fill(0),
    );
    for (let x = 0; x < n; x++) {
        up[0][x] = receiver[x];
        sm[0][x] = receiver[x];
    }
    for (let j = 1; j < log; j++) {
        for (let x = 0; x < n; x++) {
            const mid = up[j - 1][x];
            up[j][x] = up[j - 1][mid];
            sm[j][x] = sm[j - 1][x] + sm[j - 1][mid];
        }
    }
    let best = 0;
    for (let x = 0; x < n; x++) {
        let total = x;
        let cur = x;
        let remaining = k;
        let bit = 0;
        while (remaining > 0) {
            if (remaining % 2 === 1) {
                total += sm[bit][cur];
                cur = up[bit][cur];
            }
            remaining = Math.floor(remaining / 2);
            bit += 1;
        }
        if (total > best) {
            best = total;
        }
    }
    return best;
}
