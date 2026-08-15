/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let result = 0;
    for (let i = 0; i < 32; ++i) {
        let count = 0;
        for (const value of nums) {
            count += (value >> i) & 1;
        }
        if (count % 3 !== 0) {
            result |= 1 << i;
        }
    }
    return result;
};
