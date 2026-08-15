/**
 * @param {number[]} hours
 * @return {number}
 */
var longestWPI = function (hours) {
    const first = new Map([[0, -1]]);
    let prefix = 0;
    let best = 0;
    for (let i = 0; i < hours.length; i++) {
        prefix += hours[i] > 8 ? 1 : -1;
        if (prefix > 0) {
            best = i + 1;
        } else if (first.has(prefix - 1)) {
            best = Math.max(best, i - first.get(prefix - 1));
        }
        if (!first.has(prefix)) {
            first.set(prefix, i);
        }
    }
    return best;
};
