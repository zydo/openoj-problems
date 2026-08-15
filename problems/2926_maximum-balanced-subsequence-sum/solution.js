/**
 * @param {number[]} nums
 * @return {number}
 */
var maxBalancedSubsequenceSum = function (nums) {
    const n = nums.length;
    const vals = new Array(n);
    for (let i = 0; i < n; i++) vals[i] = nums[i] - i;
    const comp = Array.from(new Set(vals)).sort((a, b) => a - b);
    const m = comp.length;
    const idxOf = new Map();
    for (let i = 0; i < m; i++) idxOf.set(comp[i], i + 1);

    const bit = new Array(m + 1).fill(0);

    function update(i, value) {
        while (i <= m) {
            if (value > bit[i]) bit[i] = value;
            i += i & -i;
        }
    }

    function query(i) {
        let best = 0;
        while (i > 0) {
            if (bit[i] > best) best = bit[i];
            i -= i & -i;
        }
        return best;
    }

    let ans = null;
    for (let i = 0; i < n; i++) {
        const j = idxOf.get(vals[i]);
        const best = query(j);
        const dp = best <= 0 ? nums[i] : nums[i] + best;
        if (ans === null || dp > ans) ans = dp;
        update(j, dp);
    }
    return ans;
};
