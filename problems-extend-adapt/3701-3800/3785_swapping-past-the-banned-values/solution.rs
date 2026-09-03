use std::collections::HashMap;

impl Solution {
    pub fn dodge_swaps(nums: Vec<i32>, banned: Vec<i32>) -> i32 {
        // A swap repairs at most two bad positions, and two bad positions
        // sharing a value cannot repair each other, so the answer is at
        // least max(ceil(bad/2), worst same-value cluster). A value whose
        // combined count in nums and banned exceeds n has nowhere to
        // hide and makes the task impossible; otherwise both lower bounds
        // are achievable, and their max is the answer.
        let n = nums.len();
        let mut freq: HashMap<i32, i32> = HashMap::new();
        for &x in &nums {
            *freq.entry(x).or_insert(0) += 1;
        }
        for &x in &banned {
            *freq.entry(x).or_insert(0) += 1;
        }
        for &count in freq.values() {
            if count as usize > n {
                return -1;
            }
        }
        let mut bad: HashMap<i32, i32> = HashMap::new();
        for i in 0..n {
            if nums[i] == banned[i] {
                *bad.entry(nums[i]).or_insert(0) += 1;
            }
        }
        let mut total: i32 = 0;
        let mut worst: i32 = 0;
        for &count in bad.values() {
            total += count;
            worst = worst.max(count);
        }
        ((total + 1) / 2).max(worst)
    }
}
