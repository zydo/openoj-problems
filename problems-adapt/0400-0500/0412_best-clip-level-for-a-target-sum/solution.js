/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var bestClipLevel = function (nums, target) {
    const mutatedSum = (value) => {
        let s = 0;
        for (const x of nums) {
            s += x < value ? x : value;
        }
        return s;
    };
    let hi = Math.max(...nums);
    let lo = 0;
    while (lo < hi) {
        const mid = (lo + hi) >> 1;
        if (mutatedSum(mid) >= target) hi = mid;
        else lo = mid + 1;
    }
    if (Math.abs(mutatedSum(lo - 1) - target) <= Math.abs(mutatedSum(lo) - target)) {
        return lo - 1;
    }
    return lo;
};
