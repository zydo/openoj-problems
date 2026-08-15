/**
 * @param {string} s
 * @return {number}
 */
var appealSum = function (s) {
    const last = new Array(26).fill(-1);
    let total = 0;
    let current = 0;
    const a = "a".charCodeAt(0);
    for (let i = 0; i < s.length; i++) {
        const c = s.charCodeAt(i) - a;
        current += i - last[c];
        last[c] = i;
        total += current;
    }
    return total;
};
