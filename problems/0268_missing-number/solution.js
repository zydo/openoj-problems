/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    const n = nums.length;
    let total = 0;
    for (const value of nums) {
        total += value;
    }
    return (n * (n + 1)) / 2 - total;
};
