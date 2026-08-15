/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
    const seen = new Set();
    const repeated = new Set();
    for (let i = 0; i + 10 <= s.length; i++) {
        const seq = s.slice(i, i + 10);
        if (seen.has(seq)) {
            repeated.add(seq);
        } else {
            seen.add(seq);
        }
    }
    return Array.from(repeated).sort();
};
