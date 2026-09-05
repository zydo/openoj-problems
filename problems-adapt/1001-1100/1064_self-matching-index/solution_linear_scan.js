/**
 * @param {number[]} arr
 * @return {number}
 */
var selfMatchIndex = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === i) {
            return i;
        }
    }
    return -1;
};
