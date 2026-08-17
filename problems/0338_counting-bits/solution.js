/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
    const ans = new Array(n + 1).fill(0);
    // i >> 1 drops the low bit, so its popcount is already computed;
    // i & 1 adds the dropped bit back. Ascending order keeps it ready.
    for (let i = 1; i <= n; i++) {
        ans[i] = ans[i >> 1] + (i & 1);
    }
    return ans;
};
