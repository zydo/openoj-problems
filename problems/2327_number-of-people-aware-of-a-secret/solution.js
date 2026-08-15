/**
 * @param {number} n
 * @param {number} delay
 * @param {number} forget
 * @return {number}
 */
var peopleAwareOfSecret = function (n, delay, forget) {
    const MOD = 1000000007;
    const know = new Array(n + 1).fill(0);
    know[1] = 1;
    for (let day = 2; day <= n; day++) {
        let total = 0;
        const lo = Math.max(1, day - forget + 1);
        const hi = day - delay;
        for (let d = lo; d <= hi; d++) {
            total += know[d];
        }
        know[day] = total % MOD;
    }
    let answer = 0;
    for (let d = n - forget + 1; d <= n; d++) {
        answer += know[d];
    }
    return answer % MOD;
};
