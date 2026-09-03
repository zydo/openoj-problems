impl Solution {
    pub fn all_subsets(nums: Vec<i32>) -> Vec<Vec<i32>> {
        let n = nums.len();
        let mut all_subsets = Vec::with_capacity(1 << n);
        // Count masks upward from all bits clear ([]) to all bits set (the
        // whole array): bit i set means nums[i] is in the subset.
        for mask in 0..(1u32 << n) {
            let mut current = Vec::new();
            for (i, &value) in nums.iter().enumerate() {
                // Bit i set: nums[i] joins, in input order within the subset.
                if mask & (1 << i) != 0 {
                    current.push(value);
                }
            }
            all_subsets.push(current);
        }
        all_subsets
    }
}
