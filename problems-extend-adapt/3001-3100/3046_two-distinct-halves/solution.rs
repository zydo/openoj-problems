use std::collections::HashMap;

impl Solution {
    pub fn can_split_distinct(nums: Vec<i32>) -> bool {
        let mut frequencies: HashMap<i32, i32> = HashMap::new();
        for &num in &nums {
            let count = frequencies.entry(num).or_insert(0);
            *count += 1;
            if *count > 2 {
                return false;
            }
        }
        true
    }
}
