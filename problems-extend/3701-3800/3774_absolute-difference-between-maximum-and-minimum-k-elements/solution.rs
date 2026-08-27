impl Solution {
    // After sorting, the k smallest elements occupy the front of the
    // array and the k largest the back; equal values may straddle the
    // cut, but their contribution to each sum is unchanged.
    pub fn abs_difference(nums: Vec<i32>, k: i32) -> i32 {
        let mut nums = nums;
        nums.sort_unstable();
        let k = k as usize;
        let small: i32 = nums[..k].iter().sum();
        let large: i32 = nums[nums.len() - k..].iter().sum();
        large - small
    }
}
