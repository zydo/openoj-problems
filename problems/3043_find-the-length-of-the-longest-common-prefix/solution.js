/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var longestCommonPrefix = function (arr1, arr2) {
    const prefixes = new Set();
    for (const x of arr1) {
        let v = 0;
        for (const ch of String(x)) {
            v = v * 10 + (ch.charCodeAt(0) - 48);
            prefixes.add(v);
        }
    }
    let best = 0;
    for (const y of arr2) {
        let v = 0;
        const s = String(y);
        for (let i = 0; i < s.length; i++) {
            v = v * 10 + (s.charCodeAt(i) - 48);
            if (prefixes.has(v)) {
                if (i + 1 > best) best = i + 1;
            } else {
                break;
            }
        }
    }
    return best;
};
