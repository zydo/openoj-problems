/**
 * @param {number[]} nums
 * @return {number}
 */
var medianOfUniquenessArray = function (nums) {
    const n = nums.length;
    const length = (n * (n + 1)) / 2;
    const targetRank = Math.floor((length + 1) / 2);
    const countAtMost = (x) => {
        const freq = new Map();
        let left = 0;
        let result = 0;
        for (let right = 0; right < n; right++) {
            const value = nums[right];
            freq.set(value, (freq.get(value) || 0) + 1);
            while (freq.size > x) {
                const out = nums[left];
                const c = freq.get(out) - 1;
                if (c === 0) freq.delete(out);
                else freq.set(out, c);
                left++;
            }
            result += right - left + 1;
        }
        return result;
    };
    let lo = 1,
        hi = n;
    while (lo < hi) {
        const mid = Math.floor((lo + hi) / 2);
        if (countAtMost(mid) >= targetRank) hi = mid;
        else lo = mid + 1;
    }
    return lo;
};
