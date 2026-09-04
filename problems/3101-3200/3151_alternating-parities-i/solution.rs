impl Solution {
    pub fn has_alternating_parities(nums: Vec<i32>) -> bool {
        for w in nums.windows(2) {
            if w[0] % 2 == w[1] % 2 {
                return false;
            }
        }
        true
    }
}
