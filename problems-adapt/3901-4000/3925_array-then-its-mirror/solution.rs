impl Solution {
    pub fn array_with_mirror(nums: Vec<i32>) -> Vec<i32> {
        let n = nums.len();
        let mut answer = vec![0; 2 * n];
        for i in 0..n {
            answer[i] = nums[i];
            answer[n + i] = nums[n - i - 1];
        }
        answer
    }
}
