/**
 * @param {string} s
 * @return {number}
 */
var uniqueLetterString = function (s) {
    const positions = [];
    for (let c = 0; c < 26; c++) {
        positions.push([]);
    }
    for (let i = 0; i < s.length; i++) {
        positions[s.charCodeAt(i) - 65].push(i);
    }
    const n = s.length;
    let total = 0;
    for (let pos of positions) {
        if (pos.length === 0) {
            continue;
        }
        pos = [-1].concat(pos, [n]);
        for (let k = 1; k < pos.length - 1; k++) {
            total += (pos[k] - pos[k - 1]) * (pos[k + 1] - pos[k]);
        }
    }
    return total;
};
