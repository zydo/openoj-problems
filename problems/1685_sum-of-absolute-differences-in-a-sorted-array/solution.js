/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSumAbsoluteDifferences = function (nums) {
    const n = nums.length;
    let total = 0;
    for (const x of nums) total += x;
    let prefix = 0;
    const result = [];
    for (let i = 0; i < n; i++) {
        const x = nums[i];
        const left = x * i - prefix;
        const suffix = total - prefix - x;
        const right = suffix - x * (n - i - 1);
        result.push(left + right);
        prefix += x;
    }
    return result;
};
