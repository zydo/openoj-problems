/**
 * @param {number[]} points
 * @param {number} m
 * @return {number}
 */
var maxScore = function (points, m) {
    const n = points.length;

    const feasible = (target) => {
        let moves = 0;
        let prev = 0;
        for (let i = 0; i < n; i++) {
            const gp = points[i];
            const remain = Math.floor((target + gp - 1) / gp) - prev;
            if (remain >= 1) {
                prev = remain - 1;
                moves += 2 * remain - 1;
            } else if (i !== n - 1) {
                prev = 0;
                moves += 1;
            }
            if (moves > m) {
                return false;
            }
        }
        return moves <= m;
    };

    let hi = 0;
    for (const p of points) {
        if (p * m > hi) hi = p * m;
    }
    let lo = 0;
    while (lo < hi) {
        const mid = lo + Math.floor((hi - lo + 1) / 2);
        if (feasible(mid)) {
            lo = mid;
        } else {
            hi = mid - 1;
        }
    }
    return lo;
};
