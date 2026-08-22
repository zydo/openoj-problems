impl Solution {
    pub fn count_constrained_strings(n: i32) -> i32 {
        const MOD: i64 = 1_000_000_007;
        // dp[a][l] = strings built so far that spent `a` copies of 'x' (<2)
        // and end with `l` consecutive 'y's (<3)
        let mut dp = [[0i64; 3]; 2];
        dp[0][0] = 1;
        for _ in 0..n {
            let mut ndp = [[0i64; 3]; 2];
            for a in 0..2 {
                for l in 0..3 {
                    let v = dp[a][l];
                    if v == 0 {
                        continue;
                    }
                    ndp[a][0] = (ndp[a][0] + v) % MOD; // append 'z'
                    if a + 1 < 2 {
                        ndp[a + 1][0] = (ndp[a + 1][0] + v) % MOD; // append 'x'
                    }
                    if l + 1 < 3 {
                        ndp[a][l + 1] = (ndp[a][l + 1] + v) % MOD; // append 'y'
                    }
                }
            }
            dp = ndp;
        }
        let mut total: i64 = 0;
        for a in 0..2 {
            for l in 0..3 {
                total = (total + dp[a][l]) % MOD;
            }
        }
        total as i32
    }
}
