/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySum = function (nums) {
    const n = nums.length;
    if (n === 1) return nums[0];
    // prefixMap keyed by the deleted value; key 0 tracks min prefix sum.
    const prefixMap = new Map();
    prefixMap.set(0, 0);
    let prefixSum = 0;
    let minPrefix = 0;
    let result = nums[0];
    for (const num of nums) {
        prefixSum += num;
        if (prefixSum - minPrefix > result) result = prefixSum - minPrefix;
        if (num < 0) {
            const p0 = prefixMap.get(0);
            let val;
            if (prefixMap.has(num)) {
                const prev = prefixMap.get(num);
                val = (p0 < prev ? p0 : prev) + num;
            } else {
                val = p0 + num;
            }
            prefixMap.set(num, val);
            if (val < minPrefix) minPrefix = val;
        }
        if (prefixSum < prefixMap.get(0)) prefixMap.set(0, prefixSum);
        if (prefixMap.get(0) < minPrefix) minPrefix = prefixMap.get(0);
    }
    return result;
};
