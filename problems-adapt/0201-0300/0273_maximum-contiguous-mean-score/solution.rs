impl Solution {
    pub fn maximum_contiguous_mean_score(values: Vec<i32>, groupLimit: i32) -> f64 {
        let n = values.len();
        let mut prefix = vec![0i64; n + 1];
        for i in 0..n {
            prefix[i + 1] = prefix[i] + values[i] as i64;
        }

        // dp[i] = best(i, groups) for the current group count.
        // groups == 1: the whole remaining suffix is one group.
        let mut dp: Vec<f64> = (0..n)
            .map(|i| (prefix[n] - prefix[i]) as f64 / (n - i) as f64)
            .collect();

        for groups in 2..=groupLimit as usize {
            let mut ndp = vec![0.0f64; n];
            for i in 0..=(n - groups) {
                let mut result = 0.0f64;
                for j in (i + 1)..=(n - groups + 1) {
                    let candidate = (prefix[j] - prefix[i]) as f64 / (j - i) as f64 + dp[j];
                    if candidate > result {
                        result = candidate;
                    }
                }
                ndp[i] = result;
            }
            dp = ndp;
        }

        dp[0]
    }
}
