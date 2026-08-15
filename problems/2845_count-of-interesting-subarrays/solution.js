/**
 * @param {number[]} nums
 * @param {number} modulo
 * @param {number} k
 * @return {number}
 */
var countInterestingSubarrays = function (nums, modulo, k) {
    const count = new Map();
    count.set(0, 1);
    let pref = 0;
    let ans = 0;
    for (const x of nums) {
        if (x % modulo === k) pref++;
        let need = (pref - k) % modulo;
        if (need < 0) need += modulo;
        ans += count.get(need) || 0;
        const key = pref % modulo;
        count.set(key, (count.get(key) || 0) + 1);
    }
    return ans;
};
