/**
 * @param {number[][]} statements
 * @return {number}
 */
var maximumGood = function (statements) {
    const n = statements.length;
    let best = 0;
    for (let mask = 0; mask < 1 << n; mask++) {
        let valid = true;
        let count = 0;
        for (let i = 0; i < n && valid; i++) {
            if (!(mask & (1 << i))) {
                continue;
            }
            count++;
            for (let j = 0; j < n; j++) {
                if (statements[i][j] === 2) {
                    continue;
                }
                const isGood = (mask & (1 << j)) !== 0;
                if (isGood !== (statements[i][j] === 1)) {
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
};
