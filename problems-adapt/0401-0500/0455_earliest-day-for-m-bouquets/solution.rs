impl Solution {
    pub fn earliest_day(open_day: Vec<i32>, m: i32, k: i32) -> i32 {
        let n = open_day.len();
        // Not enough flowers to ever build m bouquets of k flowers each.
        if (m as i64) * (k as i64) > n as i64 {
            return -1;
        }
        let feasible = |day: i32| -> bool {
            let mut bouquets = 0;
            // Length of the current run of consecutive bloomed flowers.
            let mut run = 0;
            for &d in &open_day {
                if d <= day {
                    run += 1;
                    if run == k {
                        // A full run completes one bouquet; reset the run.
                        bouquets += 1;
                        run = 0;
                    }
                } else {
                    // Bouquets cannot span an unbloomed flower.
                    run = 0;
                }
            }
            bouquets >= m
        };
        // Feasibility is monotone in the day (blooming only adds flowers), so
        // binary search the first feasible day between the extreme bloom days:
        // no flower opens before the first, and all are open by the last.
        let mut lo = *open_day.iter().min().unwrap();
        let mut hi = *open_day.iter().max().unwrap();
        while lo < hi {
            let mid = lo + (hi - lo) / 2;
            if feasible(mid) {
                hi = mid;
            } else {
                lo = mid + 1;
            }
        }
        lo
    }
}
