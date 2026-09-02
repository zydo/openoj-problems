impl Solution {
    pub fn longest_open_stretch(bottom: i32, top: i32, mut blocked: Vec<i32>) -> i32 {
        blocked.sort_unstable();
        let mut best = (blocked[0] - bottom).max(top - blocked[blocked.len() - 1]);
        for pair in blocked.windows(2) {
            best = best.max(pair[1] - pair[0] - 1);
        }
        best
    }
}
