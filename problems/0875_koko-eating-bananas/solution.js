/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
    const hoursNeeded = (k) => {
        let total = 0;
        for (const pile of piles) {
            total += Math.ceil(pile / k);
        }
        return total;
    };
    let lo = 1;
    let hi = Math.max(...piles);
    while (lo < hi) {
        const mid = Math.floor((lo + hi) / 2);
        if (hoursNeeded(mid) <= h) {
            hi = mid;
        } else {
            lo = mid + 1;
        }
    }
    return lo;
};
