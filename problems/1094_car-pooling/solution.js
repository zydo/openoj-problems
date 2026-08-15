/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function (trips, capacity) {
    const diff = new Array(1001).fill(0);
    for (const [num, start, end] of trips) {
        diff[start] += num;
        diff[end] -= num;
    }
    let used = 0;
    for (const delta of diff) {
        used += delta;
        if (used > capacity) {
            return false;
        }
    }
    return true;
};
