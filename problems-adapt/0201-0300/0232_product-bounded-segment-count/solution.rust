impl Solution {
    pub fn count_product_bounded_segments(values: Vec<i32>, limit: i32) -> i32 {
        // Products are at least 1 (elements >= 1), so limit <= 1 admits nothing.
        if limit <= 1 {
            return 0;
        }
        let mut count = 0;
        let mut product: i64 = 1;
        let mut left = 0usize;
        for (right, &value) in values.iter().enumerate() {
            product *= value as i64;
            // Shrink from the left until [left, right] is the longest window
            // ending here with product strictly below limit.
            while product >= limit as i64 {
                product /= values[left] as i64;
                left += 1;
            }
            // Every window suffix also ends at right and has a smaller product:
            // right - left + 1 segments, each counted once by its right end.
            count += (right - left + 1) as i32;
        }
        count
    }
}
