/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function (spells, potions, success) {
    const sorted = potions.slice().sort((a, b) => a - b);
    const m = sorted.length;
    return spells.map((spell) => {
        const need = Math.ceil(success / spell);
        // first index with sorted[idx] >= need
        let lo = 0,
            hi = m;
        while (lo < hi) {
            const mid = (lo + hi) >> 1;
            if (sorted[mid] < need) lo = mid + 1;
            else hi = mid;
        }
        return m - lo;
    });
};
