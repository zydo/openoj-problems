/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function (people, limit) {
    const sorted = [...people].sort((a, b) => a - b);
    let i = 0;
    let j = sorted.length - 1;
    let boats = 0;
    while (i <= j) {
        if (i < j && sorted[i] + sorted[j] <= limit) {
            i++;
        }
        j--;
        boats++;
    }
    return boats;
};
