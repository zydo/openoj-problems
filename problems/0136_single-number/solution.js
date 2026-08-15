/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let result = 0;
    for (const value of nums) {
        result ^= value;
    }
    return result;
};
