/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function (time) {
    const counts = new Array(60).fill(0);
    let total = 0;
    for (const duration of time) {
        const remainder = duration % 60;
        total += counts[(60 - remainder) % 60];
        counts[remainder] += 1;
    }
    return total;
};
