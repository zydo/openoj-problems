impl Solution {
    pub fn common_interval_pieces(ranges_a: Vec<Vec<i32>>, ranges_b: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
        let mut result: Vec<Vec<i32>> = Vec::new();
        let mut i = 0usize;
        let mut j = 0usize;
        while i < ranges_a.len() && j < ranges_b.len() {
            // The overlap of the two current intervals is [max starts,
            // min ends]; lo <= hi means they intersect (closed intervals,
            // so touching endpoints still count).
            let lo = ranges_a[i][0].max(ranges_b[j][0]);
            let hi = ranges_a[i][1].min(ranges_b[j][1]);
            if lo <= hi {
                result.push(vec![lo, hi]);
            }
            // Retire the interval that ends earlier: later intervals in the
            // other list start strictly after its end, so it is done forever.
            if ranges_a[i][1] < ranges_b[j][1] {
                i += 1;
            } else {
                j += 1;
            }
        }
        result
    }
}
