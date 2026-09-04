impl Solution {
    pub fn odd_count(low: i32, high: i32) -> i32 {
        // The count of odd numbers in [0, n] is (n + 1) / 2; the answer
        // is the difference of that prefix count at high and at low - 1
        // (equivalently low / 2, since the +1/-1 cancel).
        (high + 1) / 2 - low / 2
    }
}
