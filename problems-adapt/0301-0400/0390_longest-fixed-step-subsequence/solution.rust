use std::collections::HashMap;

impl Solution {
    pub fn longest_step_subsequence(arr: Vec<i32>, step: i32) -> i32 {
        // A fixed step means each step must land on v + step, so
        // the DP collapses from positions to a map keyed by ending value.
        let mut dp: HashMap<i32, i32> = HashMap::new();
        let mut best = 0;
        for &x in &arr {
            // Best chain ending at x is one longer than the best ending at
            // x - step (0 if no predecessor has appeared yet). The
            // lookup precedes the write, so only strictly-left elements are
            // used and the chain never runs backwards.
            let len = dp.get(&(x - step)).copied().unwrap_or(0) + 1;
            // Overwriting is safe: a later chain through the same value is
            // always at least as long as an earlier one.
            dp.insert(x, len);
            if len > best {
                best = len;
            }
        }
        best
    }
}
