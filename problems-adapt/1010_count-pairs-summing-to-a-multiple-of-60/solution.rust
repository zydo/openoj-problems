impl Solution {
    pub fn count_pair_sums_divisible_by_60(durations: Vec<i32>) -> i32 {
        // entries bucketed by duration % 60: only the remainders decide
        // whether two durations sum to a multiple of 60
        let mut counts = [0i64; 60];
        let mut total: i64 = 0;
        for &duration in durations.iter() {
            let remainder = (duration % 60) as usize;
            // each pair is counted once, at its later member: match every
            // earlier entry whose remainder completes r to 0 (mod 60); the
            // % 60 folds the self-complementary classes 0 and 30 in place
            total += counts[(60 - remainder as i32) as usize % 60];
            counts[remainder] += 1;
        }
        total as i32
    }
}
