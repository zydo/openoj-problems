impl Solution {
    pub fn pair_sum_in_order(nums: Vec<i32>, target: i32) -> Vec<i32> {
        let (mut left, mut right) = (0usize, nums.len() - 1);
        while left < right {
            let total = nums[left] + nums[right];
            if total == target {
                // 1-based indices as the problem expects.
                return vec![left as i32 + 1, right as i32 + 1];
            } else if total < target {
                // Too small: pairing nums[left] with anything smaller than
                // nums[right] only lowers the sum — retire the left value.
                left += 1;
            } else {
                // Too large: retire the right value symmetrically.
                right -= 1;
            }
        }
        // Unreachable under the uniqueness promise; keeps the function total.
        Vec::new()
    }
}
