/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countTheNumOfKFreeSubsets = function (nums, k) {
    nums = nums.slice().sort((a, b) => a - b);
    const groupOf = new Map();
    const lengths = [];
    for (const x of nums) {
        if (groupOf.has(x - k)) {
            const gid = groupOf.get(x - k);
            groupOf.set(x, gid);
            lengths[gid]++;
        } else {
            groupOf.set(x, lengths.length);
            lengths.push(1);
        }
    }
    let ans = 1;
    for (const length of lengths) {
        let a = 1,
            b = 1;
        for (let _ = 0; _ < length; _++) {
            [a, b] = [b, a + b];
        }
        ans *= b;
    }
    return ans;
};
