/**
 * @param {number[]} values
 * @return {number}
 */
var countProductTrees = function (values) {
    const MOD = 1000000007;
    values = values.slice().sort((a, b) => a - b);
    const index = new Map();
    for (let i = 0; i < values.length; i++) {
        index.set(values[i], i);
    }

    // Exact modular product for values below MOD (products overflow 2^53).
    const mulMod = function (a, b) {
        const ah = Math.floor(a / 65536);
        const al = a % 65536;
        return (((((ah * b) % MOD) * 65536) % MOD) + ((al * b) % MOD)) % MOD;
    };

    const dp = new Array(values.length).fill(1); // dp[i] = trees rooted at values[i]
    for (let i = 0; i < values.length; i++) {
        const v = values[i];
        let total = 1;
        for (let j = 0; j < i; j++) {
            if (v % values[j] === 0) {
                const other = v / values[j];
                if (index.has(other)) {
                    total = (total + mulMod(dp[j], dp[index.get(other)])) % MOD;
                }
            }
        }
        dp[i] = total;
    }
    let result = 0;
    for (let i = 0; i < dp.length; i++) {
        result = (result + dp[i]) % MOD;
    }
    return result;
};
