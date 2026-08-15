/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function (nums, k) {
    const n = nums.length;
    const counts = new Array(n + 1).fill(0);
    counts[0] = 1;
    let odds = 0;
    let result = 0;
    for (const x of nums) {
        odds += x & 1;
        if (odds - k >= 0) {
            result += counts[odds - k];
        }
        counts[odds] += 1;
    }
    return result;
};
