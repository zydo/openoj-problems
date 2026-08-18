impl Solution {
    pub fn leftmost_local_maximum(nums: Vec<i32>) -> i32 {
        let n = nums.len();
        // Left-to-right scan stopping at the first descent — the direct way
        // to the leftmost qualifying index, which halving search cannot guarantee.
        for i in 0..n {
            // There is no neighbour beyond either end, so the
            // edge tests pass vacuously there.
            let left_ok = i == 0 || nums[i] > nums[i - 1];
            let right_ok = i == n - 1 || nums[i] > nums[i + 1];
            if left_ok && right_ok {
                return i as i32;
            }
        }
        // Unreachable: a qualifying index always exists.
        -1
    }
}
