/**
 * @param {string} pattern
 * @param {string} text
 * @return {boolean}
 */
var containsAnagram = function (pattern, text) {
    const m = pattern.length;
    const n = text.length;
    // No window of length m can exist inside a shorter text.
    if (m > n) {
        return false;
    }
    const need = new Array(26).fill(0);
    const window = new Array(26).fill(0);
    const a = "a".charCodeAt(0);
    for (const ch of pattern) {
        need[ch.charCodeAt(0) - a]++;
    }
    for (const ch of text.slice(0, m)) {
        window[ch.charCodeAt(0) - a]++;
    }
    // Matching frequency vectors means the window is a permutation of pattern.
    if (need.every((count, i) => count === window[i])) {
        return true;
    }
    for (let i = m; i < n; i++) {
        // Slide one position: add the entering char, drop the leaving one.
        window[text.charCodeAt(i) - a]++;
        window[text.charCodeAt(i - m) - a]--;
        if (need.every((count, j) => count === window[j])) {
            return true;
        }
    }
    return false;
};
