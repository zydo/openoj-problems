impl Solution {
    pub fn reconcile_deletion_cost(left: String, right: String) -> i32 {
        let a: Vec<i64> = left.chars().map(|c| c as i64).collect();
        let b: Vec<i64> = right.chars().map(|c| c as i64).collect();
        let la = a.len();
        let lb = b.len();
        // dp[i][j] = least discard cost for reconciling the prefixes a[:i], b[:j].
        let mut dp = vec![vec![0i64; lb + 1]; la + 1];
        // Boundary states: an unmatched prefix must be discarded in full.
        for j in 1..=lb {
            dp[0][j] = dp[0][j - 1] + b[j - 1];
        }
        for i in 1..=la {
            dp[i][0] = dp[i - 1][0] + a[i - 1];
            for j in 1..=lb {
                if a[i - 1] == b[j - 1] {
                    // Matching characters transfer the diagonal state unchanged.
                    dp[i][j] = dp[i - 1][j - 1];
                } else {
                    // Different characters force one weighted discard.
                    dp[i][j] = (dp[i - 1][j] + a[i - 1]).min(dp[i][j - 1] + b[j - 1]);
                }
            }
        }
        dp[la][lb] as i32
    }
}
