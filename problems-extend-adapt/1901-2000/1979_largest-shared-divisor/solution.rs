impl Solution {
    pub fn largest_shared_divisor(nums: Vec<i32>) -> i32 {
        let mut mn = nums[0];
        let mut mx = nums[0];
        for &value in &nums {
            mn = mn.min(value);
            mx = mx.max(value);
        }
        while mx != 0 {
            let t = mn % mx;
            mn = mx;
            mx = t;
        }
        mn
    }
}
