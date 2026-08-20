/**
 * @param {number[]} units
 * @param {number[][]} stations
 * @return {number}
 */
var leastTotalTravel = function (units, stations) {
    const rob = units.slice().sort((a, b) => a - b);
    const fac = stations.slice().sort((a, b) => a[0] - b[0] || a[1] - b[1]);
    // Optimal plans are non-crossing (triangle inequality), so after
    // sorting, each station serves a contiguous block of units in order.
    const n = rob.length;
    const INF = Infinity;
    // dp[i] = min distance to serve the first i units with the
    // stations processed so far; only i = 0 is reachable initially.
    let dp = new Array(n + 1).fill(INF);
    dp[0] = 0;
    for (const [pos, limit] of fac) {
        // pref[i] = sum of |units[j] - pos| for j < i: prefix differences
        // give any contiguous block's distance to this station.
        const pref = [0];
        for (const r of rob) {
            pref.push(pref[pref.length - 1] + Math.abs(r - pos));
        }
        const ndp = dp.slice();
        for (let i = 1; i <= n; i++) {
            // dp[i] carried over = skip this station (zero assignments).
            let best = dp[i];
            // This station absorbs the trailing t units i-t..i-1.
            const maxT = Math.min(limit, i);
            for (let t = 1; t <= maxT; t++) {
                if (dp[i - t] === INF) {
                    continue;
                }
                const val = dp[i - t] + pref[i] - pref[i - t];
                if (val < best) {
                    best = val;
                }
            }
            ndp[i] = best;
        }
        dp = ndp;
    }
    return dp[n];
};
