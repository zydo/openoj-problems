/**
 * @param {number[]} nums
 * @param {number[]} numsDivide
 * @return {number}
 */
var minOperations = function (nums, numsDivide) {
    let g = 0;
    for (const value of numsDivide) {
        g = gcd(g, value);
    }
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (g % nums[i] === 0) {
            return i;
        }
    }
    return -1;
};

const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
