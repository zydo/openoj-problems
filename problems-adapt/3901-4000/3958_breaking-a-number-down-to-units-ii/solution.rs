impl Solution {
    pub fn break_down_cost(n: i32) -> i64 {
        i64::from(n) * i64::from(n - 1) / 2
    }
}
