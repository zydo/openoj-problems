/**
 * @param {number[]} capacity
 * @param {number[]} contents
 * @param {number} spare
 * @return {number}
 */
var mostFilledContainers = function (capacity, contents, spare) {
    const needs = capacity.map((c, i) => c - contents[i]).sort((a, b) => a - b);
    let remaining = spare;
    let full = 0;
    for (const need of needs) {
        if (need > remaining) {
            break;
        }
        remaining -= need;
        full++;
    }
    return full;
};
