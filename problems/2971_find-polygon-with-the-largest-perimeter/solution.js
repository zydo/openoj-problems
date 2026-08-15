/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function (nums) {
    const a = nums.slice().sort((x, y) => x - y);
    let total = 0;
    for (const x of a) total += x;
    for (let i = a.length - 1; i > 1; i--) {
        if (total - a[i] > a[i]) return total;
        total -= a[i];
    }
    return -1;
};
