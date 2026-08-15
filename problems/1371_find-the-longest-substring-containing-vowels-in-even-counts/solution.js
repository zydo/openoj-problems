/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestSubstring = function (s) {
    const vowelBit = { a: 1, e: 2, i: 4, o: 8, u: 16 };
    const first = new Array(32).fill(-2);
    first[0] = -1;
    let mask = 0;
    let best = 0;
    for (let i = 0; i < s.length; i++) {
        const ch = s[i];
        if (ch in vowelBit) {
            mask ^= vowelBit[ch];
        }
        if (first[mask] !== -2) {
            if (i - first[mask] > best) {
                best = i - first[mask];
            }
        } else {
            first[mask] = i;
        }
    }
    return best;
};
