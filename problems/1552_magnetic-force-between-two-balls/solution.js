/**
 * @param {number[]} position
 * @param {number} m
 * @return {number}
 */
var maxDistance = function (position, m) {
    position = position.slice().sort((a, b) => a - b);

    const feasible = (distance) => {
        let count = 1;
        let last = position[0];
        for (let i = 1; i < position.length; i++) {
            if (position[i] - last >= distance) {
                count++;
                last = position[i];
                if (count >= m) {
                    return true;
                }
            }
        }
        return count >= m;
    };

    let lo = 1;
    let hi = position[position.length - 1] - position[0];
    while (lo < hi) {
        const mid = Math.floor((lo + hi + 1) / 2);
        if (feasible(mid)) {
            lo = mid;
        } else {
            hi = mid - 1;
        }
    }
    return lo;
};
