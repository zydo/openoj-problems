/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function (n) {
    if (n <= 0) {
        return 0;
    }
    let count = 0;
    let factor = 1;
    while (factor <= n) {
        const higher = Math.floor(n / (factor * 10));
        const current = Math.floor(n / factor) % 10;
        const lower = n % factor;
        if (current === 0) {
            count += higher * factor;
        } else if (current === 1) {
            count += higher * factor + lower + 1;
        } else {
            count += (higher + 1) * factor;
        }
        factor *= 10;
    }
    return count;
};
