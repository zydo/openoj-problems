/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var medianSlidingWindow = function (nums, k) {
    const window = [];
    const out = [];
    const lowerBound = (arr, target) => {
        let lo = 0,
            hi = arr.length;
        while (lo < hi) {
            const mid = lo + Math.floor((hi - lo) / 2);
            if (arr[mid] < target) lo = mid + 1;
            else hi = mid;
        }
        return lo;
    };
    for (let i = 0; i < nums.length; i++) {
        window.splice(lowerBound(window, nums[i]), 0, nums[i]);
        if (i >= k) {
            window.splice(lowerBound(window, nums[i - k]), 1);
        }
        if (i >= k - 1) {
            if (k % 2 === 1) {
                out.push(window[Math.floor(k / 2)]);
            } else {
                out.push((window[k / 2 - 1] + window[k / 2]) / 2.0);
            }
        }
    }
    return out;
};
