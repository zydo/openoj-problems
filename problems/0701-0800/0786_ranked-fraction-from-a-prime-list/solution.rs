impl Solution {
    pub fn ranked_prime_fraction(values: Vec<i32>, rank: i32) -> Vec<i32> {
        let n = values.len();
        let mut lo: f64 = 0.0;
        let mut hi: f64 = 1.0;
        let mut ans: Vec<i32> = vec![values[0], values[n - 1]];
        // Binary search on the fraction value; count fractions <= mid.
        for _ in 0..50 {
            let mid = (lo + hi) / 2.0;
            let mut count: i32 = 0;
            let mut best: f64 = 0.0;
            let mut best_pair: (i32, i32) = (values[0], values[n - 1]);
            let mut j: usize = 1;
            for i in 0..n - 1 {
                while j < n && (values[i] as f64) > mid * (values[j] as f64) {
                    j += 1;
                }
                count += (n - j) as i32;
                if j < n {
                    let val = values[i] as f64 / values[j] as f64;
                    if val > best {
                        best = val;
                        best_pair = (values[i], values[j]);
                    }
                }
            }
            if count >= rank {
                hi = mid;
                ans = vec![best_pair.0, best_pair.1];
            } else {
                lo = mid;
            }
        }
        ans
    }
}
