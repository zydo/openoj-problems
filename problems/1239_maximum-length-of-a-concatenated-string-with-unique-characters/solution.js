/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function (arr) {
    const masks = [];
    for (const s of arr) {
        let mask = 0;
        let bad = false;
        for (const ch of s) {
            const bit = 1 << (ch.charCodeAt(0) - 97);
            if (mask & bit) {
                bad = true;
                break;
            }
            mask |= bit;
        }
        masks.push(bad ? -1 : mask);
    }

    const n = arr.length;
    let best = 0;

    const dfs = (index, used) => {
        let total = 0;
        for (let b = used; b; b &= b - 1) total++;
        if (total > best) best = total;
        for (let j = index; j < n; j++) {
            if (masks[j] !== -1 && (used & masks[j]) === 0) {
                dfs(j + 1, used | masks[j]);
            }
        }
    };

    dfs(0, 0);
    return best;
};
