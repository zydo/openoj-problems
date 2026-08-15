/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countGood = function (nums, k) {
    const count = new Map();
    let pairs = 0;
    let ans = 0;
    let left = 0;
    const n = nums.length;
    for (let right = 0; right < n; right++) {
        const x = nums[right];
        const c = count.get(x) || 0;
        pairs += c;
        count.set(x, c + 1);
        while (pairs >= k) {
            ans += n - right;
            const y = nums[left];
            const cy = count.get(y);
            count.set(y, cy - 1);
            pairs -= cy - 1;
            left++;
        }
    }
    return ans;
};
