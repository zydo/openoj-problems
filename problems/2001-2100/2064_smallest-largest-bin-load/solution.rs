impl Solution {
    pub fn smallest_largest_bin_load(n: i32, piles: Vec<i32>) -> i32 {
        // A bin holds items from one pile only, so a pile with q items needs
        // ceil(q/x) bins; integer arithmetic avoids floats.
        let bins_needed = |x: i64| -> i64 {
            let mut total: i64 = 0;
            for &q in &piles {
                total += (q as i64 + x - 1) / x;
            }
            total
        };

        // Feasibility is monotone in the cap x, so binary-search the
        // smallest feasible one. hi = max(piles) is always feasible
        // (one bin can take an entire pile).
        let mut lo: i64 = 1;
        let mut hi: i64 = *piles.iter().max().unwrap() as i64;
        // Invariant: lo possibly too small, hi known feasible; the sum check
        // uses <= n since leftover bins may receive nothing.
        while lo < hi {
            let mid = lo + (hi - lo) / 2;
            if bins_needed(mid) <= n as i64 {
                hi = mid;
            } else {
                lo = mid + 1;
            }
        }
        lo as i32
    }
}
