/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let left = 0,
        right = numbers.length - 1;
    while (left < right) {
        const total = numbers[left] + numbers[right];
        if (total === target) return [left + 1, right + 1];
        if (total < target) ++left;
        else --right;
    }
    return [];
};
