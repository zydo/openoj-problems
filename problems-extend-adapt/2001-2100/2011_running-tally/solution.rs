impl Solution {
    pub fn final_tally(tokens: Vec<String>) -> i32 {
        tokens
            .iter()
            .map(|operation| if operation.as_bytes()[1] == b'+' { 1 } else { -1 })
            .sum()
    }
}
