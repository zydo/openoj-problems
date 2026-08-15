/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfGoodSubsets = function (nums) {
    const MOD = 1000000007;
    const PRIMES = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];

    const maskOf = (x) => {
        let mask = 0;
        for (let i = 0; i < PRIMES.length; i++) {
            if (x % PRIMES[i] === 0) {
                mask |= 1 << i;
                x /= PRIMES[i];
                if (x % PRIMES[i] === 0) {
                    return -1;
                }
            }
        }
        return mask;
    };

    const count = new Map();
    for (const v of nums) {
        count.set(v, (count.get(v) || 0) + 1);
    }

    const size = 1 << PRIMES.length;
    const dp = new Array(size).fill(0);
    dp[0] = 1;
    for (const [value, freq] of count) {
        if (value === 1) {
            continue;
        }
        const mask = maskOf(value);
        if (mask <= 0) {
            continue;
        }
        for (let prev = size - 1; prev >= 0; prev--) {
            if (dp[prev] !== 0 && (prev & mask) === 0) {
                dp[prev | mask] = (dp[prev | mask] + dp[prev] * freq) % MOD;
            }
        }
    }
    let total = 0;
    for (let i = 1; i < size; i++) {
        total = (total + dp[i]) % MOD;
    }
    const ones = count.get(1) || 0;
    let pow = 1;
    for (let i = 0; i < ones; i++) {
        pow = (pow * 2) % MOD;
    }
    // total * pow can exceed 2^53; multiply exactly via doubling
    let a = total;
    let b = pow;
    let product = 0;
    while (b > 0) {
        if (b & 1) {
            product = (product + a) % MOD;
        }
        a = (a + a) % MOD;
        b = Math.floor(b / 2);
    }
    return product;
};
