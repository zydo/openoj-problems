/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplit = function (nums) {
    const MOD = 1000000007;
    const n = nums.length;
    const prefix = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        prefix[i + 1] = prefix[i] + nums[i];
    }
    const total = prefix[n];
    let answer = 0;
    for (let i = 1; i < n - 1; i++) {
        const left = prefix[i];
        let lo = i + 1;
        let hi = n;
        while (lo < hi) {
            const mid = (lo + hi) >> 1;
            if (prefix[mid] < 2 * left) {
                lo = mid + 1;
            } else {
                hi = mid;
            }
        }
        if (lo >= n) {
            continue;
        }
        let l = lo;
        let h = n;
        while (l < h) {
            const mid = (l + h) >> 1;
            if (prefix[mid] > Math.floor((total + left) / 2)) {
                h = mid;
            } else {
                l = mid + 1;
            }
        }
        if (l > lo) {
            answer = (answer + l - lo) % MOD;
        }
    }
    return answer;
};
