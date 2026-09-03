impl Solution {
    pub fn pair_sum_in_order(nums: Vec<i32>, target: i32) -> Vec<i32> {
        // Sorted order lets two indexes converge from both ends: the smallest
        // and largest remaining values stand in for every candidate pair, and
        // no extra storage is needed, as the statement demands.
        let mut low = 0;
        let mut high = nums.len() - 1;
        while low < high {
            let total = nums[low] + nums[high];
            if total == target {
                // The statement's contract is 1-indexed.
                return vec![low as i32 + 1, high as i32 + 1];
            }
            if total < target {
                // Too small: nums[low] plus anything above nums[high]
                // only shrinks, so low has no partner left.
                low += 1;
            } else {
                // Too large: nums[high] plus anything below nums[low]
                // only shrinks, so high has no partner left.
                high -= 1;
            }
        }
        Vec::new()
    }
}
