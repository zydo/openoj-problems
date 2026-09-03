impl Solution {
    // The splitting process is a full binary tree: a leaf at depth d is a
    // worker that starts working at d * splitTime. Deadline T is reachable
    // iff job i can sit on a leaf of depth d <= (T - jobs[i]) /
    // splitTime, and legal leaf-depth multisets are exactly the
    // Kraft-legal ones (sum 2^-d <= 1) -- minimized by taking every job
    // at its full depth bound. Binary search the minimal T. Deadlines
    // reach ~1e14, so all bounds arithmetic is i64.
    pub fn split_schedule_time(jobs: Vec<i32>, split_time: i32) -> i64 {
        let n = jobs.len();
        let mx = *jobs.iter().max().unwrap();
        let split_time = split_time as i64;
        let mut lo = mx as i64 + split_time;
        let mut hi = mx as i64 + (n as i64 - 1) * split_time;
        while lo < hi {
            let mid = lo + (hi - lo) / 2;
            let mut slots: i64 = 0;
            let mut deep = 0;
            let mut ok = true;
            for t in &jobs {
                let d = (mid - *t as i64) / split_time;
                if d < 1 {
                    ok = false;
                    break;
                }
                if d > 30 {
                    // bounds past depth 30 fit together in less than one
                    // 2^-30 unit of slack (n < 2^17 jobs), so count all
                    // of them as a single unit
                    deep = 1;
                } else {
                    slots += 1i64 << (30 - d);
                    if slots > 1i64 << 30 {
                        ok = false;
                        break;
                    }
                }
            }
            if ok && slots + deep <= 1i64 << 30 {
                hi = mid;
            } else {
                lo = mid + 1;
            }
        }
        lo
    }
}
