/**
 * @param {number[]} nums
 * @param {number} maxOperations
 * @return {number}
 */
var minimumSize = function (nums, maxOperations) {
    const needed = (penalty) => {
        let total = 0;
        for (const balls of nums) {
            total += Math.floor((balls - 1) / penalty);
        }
        return total;
    };

    let lo = 1;
    let hi = 0;
    for (const balls of nums) {
        if (balls > hi) hi = balls;
    }
    while (lo < hi) {
        const mid = Math.floor((lo + hi) / 2);
        if (needed(mid) <= maxOperations) {
            hi = mid;
        } else {
            lo = mid + 1;
        }
    }
    return lo;
};
