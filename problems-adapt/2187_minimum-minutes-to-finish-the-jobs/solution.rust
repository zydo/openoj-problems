impl Solution {
    pub fn min_minutes_to_finish_jobs(cycles: Vec<i32>, quota: i32) -> i64 {
        let quota = quota as i64;
        let mn = cycles.iter().map(|&x| x as i64).min().unwrap();
        // Workers run independently: each finishes t / x jobs by minute t, so
        // the floor-sum is the exact job count — no simulation.
        let jobs_done = |t: i64| -> i64 { cycles.iter().map(|&x| t / x as i64).sum() };
        // The completed-job total is non-decreasing in t, so binary search
        // the first feasible minute; the fastest worker alone bounds the answer.
        let mut lo = 1i64;
        let mut hi = mn * quota;
        while lo < hi {
            let mid = (lo + hi) / 2;
            if jobs_done(mid) >= quota {
                hi = mid;
            } else {
                lo = mid + 1;
            }
        }
        lo
    }
}
