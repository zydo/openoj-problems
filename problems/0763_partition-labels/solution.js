/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
    const last = new Array(26).fill(-1);
    for (let i = 0; i < s.length; i++) {
        last[s.charCodeAt(i) - 97] = i;
    }
    const parts = [];
    let start = 0,
        end = 0;
    for (let i = 0; i < s.length; i++) {
        end = Math.max(end, last[s.charCodeAt(i) - 97]);
        if (i === end) {
            parts.push(end - start + 1);
            start = i + 1;
        }
    }
    return parts;
};
