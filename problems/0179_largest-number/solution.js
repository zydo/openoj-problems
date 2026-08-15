/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
    const strs = nums.map(String);
    strs.sort(function (a, b) {
        const ab = a + b;
        const ba = b + a;
        if (ab > ba) {
            return -1;
        }
        if (ab < ba) {
            return 1;
        }
        return 0;
    });
    const result = strs.join("");
    return result[0] === "0" ? "0" : result;
};
