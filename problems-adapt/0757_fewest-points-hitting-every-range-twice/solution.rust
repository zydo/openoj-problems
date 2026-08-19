impl Solution {
    pub fn minimum_double_coverage_points(ranges: Vec<Vec<i32>>) -> i32 {
        let mut ivs: Vec<(i32, i32)> = ranges.iter().map(|iv| (iv[0], iv[1])).collect();
        ivs.sort_by(|a, b| a.1.cmp(&b.1).then(b.0.cmp(&a.0)));
        // Chosen points stay non-decreasing; points inside [s, e] are the
        // trailing run, so checking the last two suffices.
        let mut chosen: Vec<i32> = Vec::with_capacity(ivs.len() * 2);
        for &(s, e) in &ivs {
            let m = chosen.len();
            if m >= 2 && chosen[m - 2] >= s {
                continue;
            }
            if m >= 1 && chosen[m - 1] >= s {
                chosen.push(e);
            } else {
                chosen.push(e - 1);
                chosen.push(e);
            }
        }
        chosen.len() as i32
    }
}
