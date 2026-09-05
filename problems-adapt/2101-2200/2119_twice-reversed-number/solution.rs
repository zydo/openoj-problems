impl Solution {
    pub fn survives_double_reversal(num: i32) -> bool {
        num == 0 || num % 10 != 0
    }
}
