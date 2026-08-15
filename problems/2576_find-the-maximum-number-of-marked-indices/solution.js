/**
 * @param {number[]} nums
 * @return {number}
 */
var maxNumOfMarkedIndices = function (nums) {
    const a = nums.slice().sort((x, y) => x - y);
    const n = a.length;
    let i = 0;
    for (let j = Math.floor((n + 1) / 2); j < n; j++) {
        if (2 * a[i] <= a[j]) {
            i++;
        }
    }
    return 2 * i;
};
