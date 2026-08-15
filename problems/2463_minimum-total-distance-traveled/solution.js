/**
 * @param {number[]} robot
 * @param {number[][]} factory
 * @return {number}
 */
var minimumTotalDistance = function (robot, factory) {
    const rob = robot.slice().sort((a, b) => a - b);
    const fac = factory.slice().sort((a, b) => a[0] - b[0] || a[1] - b[1]);
    const n = rob.length;
    const INF = Infinity;
    let dp = new Array(n + 1).fill(INF);
    dp[0] = 0;
    for (const [pos, limit] of fac) {
        const pref = [0];
        for (const r of rob) {
            pref.push(pref[pref.length - 1] + Math.abs(r - pos));
        }
        const ndp = dp.slice();
        for (let i = 1; i <= n; i++) {
            let best = dp[i];
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
