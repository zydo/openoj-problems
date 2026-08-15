/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} p
 * @return {number}
 */
var countDistinct = function (nums, k, p) {
    const seen = new Set();
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        let divisible = 0;
        let cur = "";
        for (let j = i; j < n; j++) {
            if (nums[j] % p === 0) divisible += 1;
            cur = cur.length ? cur + "," + nums[j] : String(nums[j]);
            if (divisible > k) break;
            seen.add(cur);
        }
    }
    return seen.size;
};
