impl Solution {
    pub fn minimum_largest_pile(piles: Vec<i32>, max_splits: i32) -> i32 {
        // A pile of v must end as ceil(v/penalty) pieces; each split
        // creates exactly one new pile, so it costs ceil(v/penalty) - 1 =
        // (v - 1) / penalty splits — achievable with near-equal pieces,
        // all of size <= penalty.
        let needed = |penalty: i32| -> i64 {
            let mut total = 0i64;
            for &size in &piles {
                total += ((size - 1) / penalty) as i64;
            }
            total
        };

        // Feasibility is monotone in the penalty, so binary search the
        // smallest feasible value; max(piles) needs zero splits.
        let mut lo = 1i32;
        let mut hi = *piles.iter().max().unwrap();
        while lo < hi {
            let mid = lo + (hi - lo) / 2;
            if needed(mid) <= max_splits as i64 {
                hi = mid;
            } else {
                lo = mid + 1;
            }
        }
        lo
    }
}
