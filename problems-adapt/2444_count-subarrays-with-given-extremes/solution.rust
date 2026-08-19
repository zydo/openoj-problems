impl Solution {
    pub fn count_subarrays_with_extremes(nums: Vec<i32>, lo: i32, hi: i32) -> i64 {
        let mut count = 0i64;
        // most recent positions of an out-of-range element, lo, hi
        let mut last_bad: i64 = -1;
        let mut last_min: i64 = -1;
        let mut last_max: i64 = -1;
        for (i, &x) in nums.iter().enumerate() {
            let i = i as i64;
            // a valid subarray ending later must start after a bad element
            if x < lo || x > hi {
                last_bad = i;
            }
            // tracking the last occurrence is enough: it covers earlier ones
            if x == lo {
                last_min = i;
            }
            if x == hi {
                last_max = i;
            }
            // starts for this right end: after last_bad, at or before
            // min(last_min, last_max); the 0 clamp skips ends with none
            count += (last_min.min(last_max) - last_bad).max(0);
        }
        count
    }
}
