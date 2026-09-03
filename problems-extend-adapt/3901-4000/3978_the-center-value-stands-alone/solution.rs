impl Solution {
    pub fn lone_center(nums: Vec<i32>) -> bool {
        let middle = nums[nums.len() / 2];
        nums.iter().filter(|&&value| value == middle).count() == 1
    }
}
