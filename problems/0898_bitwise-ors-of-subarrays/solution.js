/**
 * @param {number[]} arr
 * @return {number}
 */
var subarrayBitwiseORs = function (arr) {
    const seen = new Set();
    let current = new Set();
    for (const x of arr) {
        const nxt = new Set();
        for (const y of current) {
            nxt.add(x | y);
        }
        nxt.add(x);
        current = nxt;
        for (const v of current) {
            seen.add(v);
        }
    }
    return seen.size;
};
