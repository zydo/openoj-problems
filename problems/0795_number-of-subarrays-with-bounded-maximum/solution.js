/**
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var numSubarrayBoundedMax = function (nums, left, right) {
    function countBelow(bound) {
        let total = 0;
        let run = 0;
        for (const v of nums) {
            if (v <= bound) {
                run += 1;
                total += run;
            } else {
                run = 0;
            }
        }
        return total;
    }

    return countBelow(right) - countBelow(left - 1);
};
