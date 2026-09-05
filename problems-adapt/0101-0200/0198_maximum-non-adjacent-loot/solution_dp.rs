impl Solution {
    pub fn max_non_adjacent_loot(nums: Vec<i32>) -> i32 {
        // Rolling two-variable DP: cur = best through position i-1, prev = best
        // through position i-2; both start at 0 ("nothing taken yet").
        let (mut prev, mut cur) = (0i64, 0i64);
        for &x in &nums {
            // Skip this position (keep cur) or take it (prev + x).
            let next = cur.max(prev + x as i64);
            prev = cur;
            cur = next;
        }
        cur as i32
    }
}
