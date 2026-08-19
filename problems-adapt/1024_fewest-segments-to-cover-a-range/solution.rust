impl Solution {
    pub fn fewest_segments(segments: Vec<Vec<i32>>, span: i32) -> i32 {
        // Jump-game greedy over segments sorted by start.
        let mut ordered = segments.clone();
        ordered.sort();
        let mut count = 0;
        let mut covered = 0;
        let mut farthest = 0;
        let mut i = 0usize;
        let n = ordered.len();
        while covered < span {
            // Cursor i never resets: every segment starting at or before `covered`
            // is examined once, tracking the farthest reach it enables.
            while i < n && ordered[i][0] <= covered {
                if ordered[i][1] > farthest {
                    farthest = ordered[i][1];
                }
                i += 1;
            }
            // No usable segment reaches past the current coverage: an unbridgeable gap.
            if farthest == covered {
                return -1;
            }
            // Take one segment — the farthest-reaching — and jump the frontier.
            covered = farthest;
            count += 1;
        }
        count
    }
}
