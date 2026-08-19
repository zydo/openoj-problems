/**
 * @param {number} n
 * @return {number}
 */
var countConstrainedStrings = function (n) {
    const MOD = 1000000007;
    // dp[a][l] = strings built so far that spent `a` copies of 'x' (<2)
    // and end with `l` consecutive 'y's (<3)
    let dp = [
        [0, 0, 0],
        [0, 0, 0],
    ];
    dp[0][0] = 1;
    for (let step = 0; step < n; step++) {
        const ndp = [
            [0, 0, 0],
            [0, 0, 0],
        ];
        for (let a = 0; a < 2; a++) {
            for (let l = 0; l < 3; l++) {
                const v = dp[a][l];
                if (v === 0) continue;
                ndp[a][0] = (ndp[a][0] + v) % MOD; // append 'z'
                if (a + 1 < 2) {
                    ndp[a + 1][0] = (ndp[a + 1][0] + v) % MOD; // append 'x'
                }
                if (l + 1 < 3) {
                    ndp[a][l + 1] = (ndp[a][l + 1] + v) % MOD; // append 'y'
                }
            }
        }
        dp = ndp;
    }
    let total = 0;
    for (let a = 0; a < 2; a++) {
        for (let l = 0; l < 3; l++) {
            total = (total + dp[a][l]) % MOD;
        }
    }
    return total;
};
