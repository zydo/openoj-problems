/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortColors = function (nums) {
    const counts = [0, 0, 0];
    for (const value of nums) {
        counts[value] += 1;
    }
    let index = 0;
    for (let color = 0; color < 3; color++) {
        for (let c = 0; c < counts[color]; c++) {
            nums[index] = color;
            index += 1;
        }
    }
    return nums;
};
