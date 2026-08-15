/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString = function (a, b, c) {
    const counts = { a: a, b: b, c: c };
    const result = [];
    while (true) {
        const ranked = Object.entries(counts).sort(
            (x, y) => y[1] - x[1] || (x[0] < y[0] ? -1 : 1),
        );
        let letter = ranked[0][0];
        if (ranked[0][1] === 0) {
            break;
        }
        const n = result.length;
        if (n >= 2 && result[n - 1] === letter && result[n - 2] === letter) {
            letter = ranked[1][0];
            if (ranked[1][1] === 0) {
                break;
            }
        }
        result.push(letter);
        counts[letter] -= 1;
    }
    return result.join("");
};
