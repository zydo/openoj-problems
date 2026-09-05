/**
 * @param {number[]} queries
 * @param {number} width
 * @return {number[]}
 */
var palindromeAtRank = function (queries, width) {
    // The kth palindrome is the kth half-number mirrored, so each query is
    // one string construction; past the 9*10^(half-1) supply it is -1.
    const half = Math.floor((width + 1) / 2);
    const count = 9 * Math.pow(10, half - 1);
    return queries.map((query) => {
        if (query > count) {
            return -1;
        }
        let digits = String(Math.pow(10, half - 1) + query - 1);
        for (let i = Math.floor(width / 2) - 1; i >= 0; i--) {
            digits += digits[i];
        }
        return Number(digits);
    });
};
