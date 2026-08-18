impl Solution {
    pub fn apportion(scores: Vec<i32>) -> i32 {
        let n = scores.len();
        // A weight of one everywhere is the floor the rules allow.
        let mut weights = vec![1i64; n];
        // Left-to-right: satisfy the left-hand rule with the smallest
        // value that clears the position on the left.
        for i in 1..n {
            if scores[i] > scores[i - 1] {
                weights[i] = weights[i - 1] + 1;
            }
        }
        // Right-to-left: the mirror rule. Taking a max only raises a
        // weight, so this sweep cannot break what the first settled.
        for i in (0..n.saturating_sub(1)).rev() {
            if scores[i] > scores[i + 1] {
                weights[i] = weights[i].max(weights[i + 1] + 1);
            }
        }
        weights.iter().sum::<i64>() as i32
    }
}
