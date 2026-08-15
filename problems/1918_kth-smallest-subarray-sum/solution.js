/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var kthSmallestSubarraySum = function (nums, k) {
    const countAtMost = (limit) => {
        let total = 0;
        let windowSum = 0;
        let left = 0;
        for (let right = 0; right < nums.length; right++) {
            windowSum += nums[right];
            while (windowSum > limit) {
                windowSum -= nums[left];
                left++;
            }
            total += right - left + 1;
        }
        return total;
    };

    let lo = Math.min(...nums);
    let hi = nums.reduce((a, b) => a + b, 0);
    while (lo < hi) {
        const mid = Math.floor((lo + hi) / 2);
        if (countAtMost(mid) >= k) hi = mid;
        else lo = mid + 1;
    }
    return lo;
};
