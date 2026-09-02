impl Solution {
    pub fn hugging_zero(nums: Vec<i32>) -> i32 {
        let mut best = nums[0];
        for &x in &nums {
            if x.abs() < best.abs() || (x.abs() == best.abs() && x > best) {
                best = x;
            }
        }
        best
    }
}
