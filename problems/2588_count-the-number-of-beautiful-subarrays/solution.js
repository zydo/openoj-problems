/**
 * @param {number[]} nums
 * @return {number}
 */
var beautifulSubarrays = function (nums) {
    const count = new Map();
    count.set(0, 1);
    let x = 0;
    let ans = 0;
    for (const v of nums) {
        x ^= v;
        const c = count.get(x) || 0;
        ans += c;
        count.set(x, c + 1);
    }
    return ans;
};
