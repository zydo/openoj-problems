/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var isPossibleDivide = function (nums, k) {
    if (nums.length % k !== 0) return false;
    const counts = new Map();
    for (const x of nums) {
        counts.set(x, (counts.get(x) || 0) + 1);
    }
    const values = [...counts.keys()].sort((a, b) => a - b);
    for (const value of values) {
        const need = counts.get(value);
        if (need <= 0) continue;
        for (let i = value; i < value + k; i++) {
            const have = counts.get(i) || 0;
            if (have < need) return false;
            counts.set(i, have - need);
        }
    }
    return true;
};
