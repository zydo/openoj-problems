impl Solution {
    pub fn minimum_largest_gap(positions: Vec<i32>, k: i32) -> f64 {
        let mut gaps: Vec<f64> = Vec::with_capacity(positions.len().saturating_sub(1));
        for i in 0..positions.len() - 1 {
            gaps.push((positions[i + 1] - positions[i]) as f64);
        }
        let mut lo: f64 = 0.0;
        let mut hi: f64 = gaps[0];
        for &g in &gaps[1..] {
            if g > hi {
                hi = g;
            }
        }
        // Binary search the smallest feasible maximum distance.
        for _ in 0..60 {
            let mid = (lo + hi) / 2.0;
            if mid <= 0.0 {
                hi = 0.0;
                break;
            }
            let mut needed: i64 = 0;
            for &g in &gaps {
                needed += (g / mid).ceil() as i64 - 1;
            }
            if needed <= k as i64 {
                hi = mid;
            } else {
                lo = mid;
            }
        }
        hi
    }
}
