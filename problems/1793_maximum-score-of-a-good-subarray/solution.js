/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumScore = function (nums, k) {
    const n = nums.length;
    let best = nums[k];
    let lo = k;
    let hi = k;
    let curMin = nums[k];
    while (lo > 0 || hi < n - 1) {
        let cand;
        if (lo === 0) {
            hi += 1;
            cand = nums[hi];
        } else if (hi === n - 1) {
            lo -= 1;
            cand = nums[lo];
        } else if (nums[lo - 1] >= nums[hi + 1]) {
            lo -= 1;
            cand = nums[lo];
        } else {
            hi += 1;
            cand = nums[hi];
        }
        if (cand < curMin) {
            curMin = cand;
        }
        const score = curMin * (hi - lo + 1);
        if (score > best) {
            best = score;
        }
    }
    return best;
};
