impl Solution {
    pub fn longest_additive_subseq(nums: Vec<i32>) -> i32 {
        let n = nums.len();
        let mut index_of: std::collections::HashMap<i32, usize> = std::collections::HashMap::new();
        for (i, &v) in nums.iter().enumerate() {
            index_of.insert(v, i);
        }
        // dp[j][i] = longest additive subsequence ending with nums[j], nums[i]
        let mut dp = vec![vec![2i32; n]; n];
        let mut best = 0;
        for i in 0..n {
            for j in 0..i {
                let need = nums[i] - nums[j];
                if need < nums[j] {
                    if let Some(&k) = index_of.get(&need) {
                        dp[j][i] = dp[k][j] + 1;
                        if dp[j][i] > best {
                            best = dp[j][i];
                        }
                    }
                }
            }
        }
        if best >= 3 {
            best
        } else {
            0
        }
    }
}
