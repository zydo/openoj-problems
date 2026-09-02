/**
 * @param {string} s
 * @return {number}
 */
var countVisibleStars = function (s) {
    let count = 0;
    let inside = false;
    for (const ch of s) {
        if (ch === "|") {
            inside = !inside;
        } else if (!inside && ch === "*") {
            count++;
        }
    }
    return count;
};
