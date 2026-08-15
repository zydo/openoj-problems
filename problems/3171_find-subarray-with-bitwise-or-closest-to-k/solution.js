/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function (nums, k) {
    let best = Math.abs(nums[0] - k);
    let current = [0];
    for (const value of nums) {
        const nxt = [value];
        for (const prev of current) {
            nxt.push(prev | value);
        }
        nxt.sort((a, b) => a - b);
        // deduplicate
        const uniq = [];
        for (const x of nxt) {
            if (uniq.length === 0 || uniq[uniq.length - 1] !== x) uniq.push(x);
        }
        current = uniq;
        for (const x of current) {
            const diff = Math.abs(x - k);
            if (diff < best) best = diff;
        }
    }
    return best;
};
