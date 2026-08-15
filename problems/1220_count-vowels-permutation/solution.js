/**
 * @param {number} n
 * @return {number}
 */
var countVowelPermutation = function (n) {
    const MOD = 1000000007;
    let a = 1,
        e = 1,
        i = 1,
        o = 1,
        u = 1;
    for (let t = 0; t < n - 1; t++) {
        const na = (e + i + u) % MOD;
        const ne = (a + i) % MOD;
        const ni = (e + o) % MOD;
        const no = i;
        const nu = (i + o) % MOD;
        a = na;
        e = ne;
        i = ni;
        o = no;
        u = nu;
    }
    return (a + e + i + o + u) % MOD;
};
