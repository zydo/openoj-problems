impl Solution {
    pub fn min_covering_positions(intervals: Vec<Vec<i32>>) -> i32 {
        let mut ordered = intervals;
        ordered.sort_by_key(|p| p[1]);
        // Position-cover greedy: sort by right endpoint and place a position at the
        // right end of the first uncovered interval — among the positions
        // covering it, the right endpoint reaches every interval that any
        // earlier position could.
        let mut chosen = 0i32;
        // Sentinel below any coordinate (coordinates span signed 32-bit).
        let mut last_position = i64::MIN;
        for p in &ordered {
            // Strict >: intervals are closed, so start == last_position is
            // already covered; otherwise place a position at the earliest end remaining.
            if p[0] as i64 > last_position {
                chosen += 1;
                last_position = p[1] as i64;
            }
        }
        chosen
    }
}
