/**
 * @param {number[]} sweetness
 * @param {number} k
 * @return {number}
 */
var maximizeSweetness = function (sweetness, k) {
    const piecesAtLeast = (target) => {
        let count = 0;
        let current = 0;
        for (const value of sweetness) {
            current += value;
            if (current >= target) {
                count += 1;
                current = 0;
            }
        }
        return count;
    };

    let total = 0;
    for (const value of sweetness) total += value;

    let lo = 1;
    let hi = Math.floor(total / (k + 1));
    let best = 0;
    while (lo <= hi) {
        const mid = Math.floor((lo + hi) / 2);
        if (piecesAtLeast(mid) >= k + 1) {
            best = mid;
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }
    }
    return best;
};
