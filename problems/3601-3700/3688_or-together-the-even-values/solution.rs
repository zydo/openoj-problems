impl Solution {
    pub fn or_of_even_values(nums: Vec<i32>) -> i32 {
        // Fold each even value into the accumulator as the scan passes it;
        // 0 is the OR identity, so an array with no evens returns 0.
        let mut result = 0;
        for value in nums {
            if value % 2 == 0 {
                result |= value;
            }
        }
        result
    }
}
