/**
 * @param {number[]} nextVisit
 * @return {number}
 */
var firstDayBeenInAllRooms = function (nextVisit) {
    const MOD = 1000000007;
    const n = nextVisit.length;
    const f = new Array(n).fill(0);
    for (let i = 1; i < n; i++) {
        f[i] = (2 * f[i - 1] - f[nextVisit[i - 1]] + 2) % MOD;
        if (f[i] < 0) {
            f[i] += MOD;
        }
    }
    return f[n - 1];
};
