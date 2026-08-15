/**
 * @param {number[]} nums
 * @return {number}
 */
var countSpecialSubsequences = function (nums) {
    const MOD = 1000000007;
    let f0 = 0,
        f1 = 0,
        f2 = 0;
    for (const x of nums) {
        if (x === 0) {
            f0 = (f0 * 2 + 1) % MOD;
        } else if (x === 1) {
            f1 = (f1 * 2 + f0) % MOD;
        } else {
            f2 = (f2 * 2 + f1) % MOD;
        }
    }
    return f2;
};
