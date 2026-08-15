/**
 * @param {string} s
 * @return {string}
 */
var lastSubstring = function (s) {
    const n = s.length;
    let i = 0,
        j = 1,
        k = 0;
    while (j + k < n) {
        if (s[i + k] === s[j + k]) {
            k++;
        } else if (s[i + k] < s[j + k]) {
            i = Math.max(i + k + 1, j);
            j = i + 1;
            k = 0;
        } else {
            j = j + k + 1;
            k = 0;
        }
    }
    return s.substring(i);
};
