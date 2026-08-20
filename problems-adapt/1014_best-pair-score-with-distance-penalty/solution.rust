impl Solution {
    pub fn best_pair_score_with_distance_penalty(values: Vec<i32>) -> i32 {
        let mut best_prefix = values[0]; // max of values[i] + i seen so far
        let mut best = i32::MIN;
        for j in 1..values.len() {
            let score = best_prefix + values[j] - j as i32;
            if score > best {
                best = score;
            }
            if values[j] + j as i32 > best_prefix {
                best_prefix = values[j] + j as i32;
            }
        }
        best
    }
}
