impl Solution {
    pub fn bounded_final_score_probability(scoreLimit: i32, stopScore: i32, max_pts: i32) -> f64 {
        let (scoreLimit, stopScore, max_pts) = (scoreLimit as i64, stopScore as i64, max_pts as i64);
        if stopScore == 0 || scoreLimit >= stopScore - 1 + max_pts {
            return 1.0;
        }
        // dp[i] = probability of ever holding exactly i points.
        let mut dp = vec![0.0f64; (scoreLimit + 1) as usize];
        dp[0] = 1.0;
        let mut window = 1.0f64; // sum of dp[max(0, i - drawMaximum) .. i - 1]
        for i in 1..=scoreLimit {
            dp[i as usize] = window / max_pts as f64;
            if i < stopScore {
                window += dp[i as usize];
            }
            if i - max_pts >= 0 {
                window -= dp[(i - max_pts) as usize];
            }
        }
        // Compensated (Neumaier) summation, matching the reference's built-in sum().
        let mut result = 0.0f64;
        let mut c = 0.0f64;
        for i in stopScore..=scoreLimit {
            let x = dp[i as usize];
            let t = result + x;
            if result.abs() >= x.abs() {
                c += (result - t) + x;
            } else {
                c += (x - t) + result;
            }
            result = t;
        }
        result + c
    }
}
