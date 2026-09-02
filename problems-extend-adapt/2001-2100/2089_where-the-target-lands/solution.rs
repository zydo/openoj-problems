impl Solution {
    pub fn sorted_positions(nums: Vec<i32>, target: i32) -> Vec<i32> {
        let smaller = nums.iter().filter(|&&value| value < target).count() as i32;
        let equal = nums.iter().filter(|&&value| value == target).count() as i32;
        (smaller..smaller + equal).collect()
    }
}
