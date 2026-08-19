impl Solution {
    pub fn count_bounded_sequences(n: i32, k: i32, target: i32) -> i32 {
        const MOD: i64 = 1_000_000_007;
        let n = n as usize;
        let k = k as usize;
        let target = target as usize;
        // dp[t]: ways for the terms chosen so far to reach sum t
        let mut dp = vec![0i64; target + 1];
        let mut ndp = vec![0i64; target + 1];
        // zero terms reach sum 0 in exactly one way
        dp[0] = 1;
        for _ in 0..n {
            // fresh values per term: the transition reads only the previous
            // term's distribution, else one term could count twice
            for t in 1..=target {
                // every term value f is a distinct outcome, so all values are
                // summed; hi = min(k, t) skips values that overshoot
                let hi = k.min(t);
                let mut s: i64 = 0;
                for f in 1..=hi {
                    s += dp[t - f];
                }
                ndp[t] = s % MOD;
            }
            std::mem::swap(&mut dp, &mut ndp);
            // only the swapped-out table's old base needs clearing
            ndp[0] = 0;
        }
        // targets no sequence reaches were never written, so read as 0
        dp[target] as i32
    }
}
