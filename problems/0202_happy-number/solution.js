/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    const step = (m) => {
        let total = 0;
        while (m !== 0) {
            const digit = m % 10;
            total += digit * digit;
            m = Math.floor(m / 10);
        }
        return total;
    };
    const seen = new Set();
    while (n !== 1 && !seen.has(n)) {
        seen.add(n);
        n = step(n);
    }
    return n === 1;
};
