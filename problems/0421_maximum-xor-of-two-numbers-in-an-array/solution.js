/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function (nums) {
    let best = 0;
    let mask = 0;
    for (let bit = 30; bit >= 0; bit--) {
        mask |= 1 << bit;
        const prefixes = new Set();
        for (const value of nums) {
            prefixes.add(value & mask);
        }
        const candidate = best | (1 << bit);
        let found = false;
        for (const prefix of prefixes) {
            if (prefixes.has(candidate ^ prefix)) {
                found = true;
                break;
            }
        }
        if (found) {
            best = candidate;
        }
    }
    return best;
};
