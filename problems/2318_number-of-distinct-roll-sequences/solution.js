/**
 * @param {number} n
 * @return {number}
 */
var distinctSequences = function (n) {
    const MOD = 1000000007;
    const gcd = (a, b) => {
        while (b !== 0) {
            const t = a % b;
            a = b;
            b = t;
        }
        return a;
    };
    if (n === 1) return 6;
    let dp = Array.from({ length: 7 }, () => new Array(7).fill(0));
    for (let a = 1; a <= 6; a++) {
        for (let b = 1; b <= 6; b++) {
            if (a !== b && gcd(a, b) === 1) dp[a][b] = 1;
        }
    }
    for (let len = 3; len <= n; len++) {
        const ndp = Array.from({ length: 7 }, () => new Array(7).fill(0));
        for (let a = 1; a <= 6; a++) {
            for (let b = 1; b <= 6; b++) {
                const cnt = dp[a][b];
                if (cnt === 0) continue;
                for (let c = 1; c <= 6; c++) {
                    if (c !== a && c !== b && gcd(c, b) === 1) {
                        ndp[b][c] = (ndp[b][c] + cnt) % MOD;
                    }
                }
            }
        }
        dp = ndp;
    }
    let total = 0;
    for (let a = 1; a <= 6; a++) {
        for (let b = 1; b <= 6; b++) total = (total + dp[a][b]) % MOD;
    }
    return total;
};
