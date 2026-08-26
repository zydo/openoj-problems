impl Solution {
    pub fn visible_mountains(peaks: Vec<Vec<i32>>) -> i32 {
        // (u, v) = (x - y, x + y): mountain b hides peak a iff
        // u_b <= u_a and v_b >= v_a. Sort by u ascending, v descending,
        // then a peak is visible iff its v beats every earlier one strictly.
        let mut points: Vec<(i64, i64)> = peaks
            .iter()
            .map(|p| {
                let (x, y) = (p[0] as i64, p[1] as i64);
                (x - y, -(x + y))
            })
            .collect();
        points.sort_unstable();
        let n = points.len();
        let mut count = 0i32;
        let mut best_seen = false;
        let mut best = 0i64;
        let mut i = 0usize;
        while i < n {
            let (u, negv) = points[i];
            let mut j = i + 1;
            while j < n && points[j] == (u, negv) {
                j += 1;
            }
            if j - i == 1 && (!best_seen || -negv > best) {
                count += 1;
            }
            if !best_seen || -negv > best {
                best = -negv;
                best_seen = true;
            }
            i = j;
        }
        count
    }
}
