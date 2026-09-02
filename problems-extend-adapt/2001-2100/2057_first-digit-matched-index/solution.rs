impl Solution {
    pub fn first_digit_match(nums: Vec<i32>) -> i32 {
        for (index, &value) in nums.iter().enumerate() {
            if index % 10 == value as usize {
                return index as i32;
            }
        }
        -1
    }
}
