impl Solution {
    pub fn zero_filled_subarray(nums: Vec<i32>) -> i64 {
        let mut total = 0_i64;
        let mut streak = 0_i64;
        for num in nums {
            if num == 0 {
                streak += 1;
                total += streak;
            } else {
                streak = 0;
            }
        }
        total
    }
}
