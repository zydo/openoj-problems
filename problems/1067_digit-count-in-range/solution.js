/**
 * @param {number} d
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var digitsCount = function (d, low, high) {
    const countUpTo = (d, n) => {
        if (n <= 0) {
            return 0;
        }
        const s = String(n);
        const length = s.length;
        let total = 0;
        for (let i = 0; i < length; i++) {
            const highPart = i > 0 ? parseInt(s.slice(0, i), 10) : 0;
            const cur = s.charCodeAt(i) - 48;
            const lowPart = i + 1 < length ? parseInt(s.slice(i + 1), 10) : 0;
            let power = 1;
            for (let k = 0; k < length - 1 - i; k++) {
                power *= 10;
            }
            if (d === 0) {
                if (highPart >= 1) {
                    if (cur > 0) {
                        total += highPart * power;
                    } else {
                        total += (highPart - 1) * power + lowPart + 1;
                    }
                }
            } else {
                if (cur > d) {
                    total += (highPart + 1) * power;
                } else if (cur === d) {
                    total += highPart * power + lowPart + 1;
                } else {
                    total += highPart * power;
                }
            }
        }
        return total;
    };
    return countUpTo(d, high) - countUpTo(d, low - 1);
};
