/**
 * @param {string} s
 * @return {string}
 */
var encode = function (s) {
    const n = s.length;
    const dp = [];
    for (let i = 0; i < n; i++) {
        dp.push(new Array(n).fill(""));
    }
    for (let length = 1; length <= n; length++) {
        for (let i = 0; i + length <= n; i++) {
            const j = i + length - 1;
            const substr = s.slice(i, j + 1);
            let best = substr;
            for (let k = i; k < j; k++) {
                const candidate = dp[i][k] + dp[k + 1][j];
                if (candidate.length < best.length) best = candidate;
            }
            let compression = null;
            for (let p = 1; p < length; p++) {
                if (length % p === 0) {
                    const pattern = s.slice(i, i + p);
                    if (pattern.repeat(length / p) === substr) {
                        const encoded =
                            String(length / p) + "[" + dp[i][i + p - 1] + "]";
                        if (
                            compression === null ||
                            encoded.length < compression.length
                        ) {
                            compression = encoded;
                        }
                    }
                }
            }
            if (compression !== null) {
                if (
                    compression.length < best.length ||
                    (compression.length === best.length && best !== substr)
                ) {
                    best = compression;
                }
            }
            dp[i][j] = best;
        }
    }
    return dp[0][n - 1];
};
