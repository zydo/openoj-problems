/**
 * @param {number[]} weights
 * @param {number} capacity
 * @return {number}
 */
var minimumTwoItemContainers = function (weights, capacity) {
    const sorted = [...weights].sort((a, b) => a - b);
    let i = 0;
    let j = sorted.length - 1;
    let boats = 0;
    while (i <= j) {
        // The heaviest boards either way; the lightest is their best
        // partner, since a heavier one only risks exceeding the capacity.
        // The i < j guard keeps the last person from pairing with themself.
        if (i < j && sorted[i] + sorted[j] <= capacity) {
            i++;
        }
        j--;
        boats++;
    }
    return boats;
};
