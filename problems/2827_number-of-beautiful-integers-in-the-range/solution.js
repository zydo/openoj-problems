/**
 * @param {number} low
 * @param {number} high
 * @param {number} k
 * @return {number}
 */
var numberOfBeautifulIntegers = function (low, high, k) {
    function countUpTo(n) {
        if (n <= 0) return 0;
        const digits = String(n).split("").map(Number);
        const L = digits.length;
        // state: pos, tight, started, balance (+10), mod
        const memo = new Float64Array(11 * 2 * 2 * 21 * k).fill(-1);
        function dp(pos, tight, started, balance, mod) {
            if (pos === L) {
                return started === 1 && balance === 0 && mod === 0 ? 1 : 0;
            }
            const key =
                (((pos * 2 + tight) * 2 + started) * 21 + balance + 10) * k +
                mod;
            if (memo[key] >= 0) return memo[key];
            const limit = tight === 1 ? digits[pos] : 9;
            let total = 0;
            for (let d = 0; d <= limit; d++) {
                const nextTight = tight === 1 && d === limit ? 1 : 0;
                if (started === 0 && d === 0) {
                    total += dp(
                        pos + 1,
                        nextTight,
                        0,
                        balance,
                        (mod * 10 + d) % k,
                    );
                } else {
                    const newBalance = balance + (d % 2 === 1 ? 1 : -1);
                    total += dp(
                        pos + 1,
                        nextTight,
                        1,
                        newBalance,
                        (mod * 10 + d) % k,
                    );
                }
            }
            memo[key] = total;
            return total;
        }
        return dp(0, 1, 0, 0, 0);
    }
    return countUpTo(high) - countUpTo(low - 1);
};
