/**
 * @param {number[]} arr
 * @return {number}
 */
var countSuccessors = function (arr) {
    const seen = new Set(arr);
    let count = 0;
    for (const x of arr) {
        if (seen.has(x + 1)) {
            count++;
        }
    }
    return count;
};
