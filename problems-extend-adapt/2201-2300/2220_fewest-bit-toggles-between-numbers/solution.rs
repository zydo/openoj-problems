impl Solution {
    pub fn fewest_toggles(start: i32, goal: i32) -> i32 {
        (start ^ goal).count_ones() as i32
    }
}
