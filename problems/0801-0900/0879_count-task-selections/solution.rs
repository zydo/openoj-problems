impl Solution {
    pub fn count_task_selections(n: i32, minPayoff: i32, crew: Vec<i32>, payoff: Vec<i32>) -> i32 {
        const MOD: i64 = 1_000_000_007;
        let n = n as usize;
        let min_payoff = minPayoff as usize;
        // dp[workers][cap] = number of subsets using at most `workers` workers
        // and at least `cap` payoff; cap is capped at minPayoff.
        let mut dp = vec![vec![0i64; min_payoff + 1]; n + 1];
        for workers in 0..=n {
            dp[workers][0] = 1;
        }
        for idx in 0..crew.len() {
            let g = crew[idx] as usize;
            let p = payoff[idx] as usize;
            let mut workers = n;
            while workers >= g {
                let mut cap = min_payoff;
                loop {
                    let prev = if cap > p { cap - p } else { 0 };
                    dp[workers][cap] = (dp[workers][cap] + dp[workers - g][prev]) % MOD;
                    if cap == 0 {
                        break;
                    }
                    cap -= 1;
                }
                if workers == 0 {
                    break;
                }
                workers -= 1;
            }
        }
        dp[n][min_payoff] as i32
    }
}
