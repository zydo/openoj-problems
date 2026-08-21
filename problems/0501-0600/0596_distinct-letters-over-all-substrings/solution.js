/**
 * @param {string} s
 * @return {number}
 */
var distinctLetterSum = function (s) {
    // flip the accounting: per character, count the substrings containing it
    // -1 = not yet seen, so i - last[c] counts all i + 1 possible starts
    const last = new Array(26).fill(-1);
    let total = 0;
    // current = total variety of all substrings ending at i
    let current = 0;
    const a = "a".charCodeAt(0);
    for (let i = 0; i < s.length; i++) {
        const c = s.charCodeAt(i) - a;
        // s[i] is newly counted in the substrings starting after its previous
        // occurrence
        current += i - last[c];
        last[c] = i;
        // each substring is charged once per distinct char it contains: its variety
        total += current;
    }
    return total;
};
