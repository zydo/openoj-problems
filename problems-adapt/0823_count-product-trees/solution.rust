use std::collections::HashMap;

impl Solution {
    pub fn count_product_trees(values: Vec<i32>) -> i32 {
        const MOD: i64 = 1_000_000_007;
        let mut values = values;
        values.sort_unstable();
        let mut index: HashMap<i32, usize> = HashMap::new();
        for (i, &v) in values.iter().enumerate() {
            index.insert(v, i);
        }
        let mut dp = vec![1i64; values.len()]; // dp[i] = trees rooted at values[i]
        for i in 0..values.len() {
            let v = values[i];
            let mut total: i64 = 1;
            for j in 0..i {
                if v % values[j] == 0 {
                    if let Some(&other) = index.get(&(v / values[j])) {
                        total += dp[j] * dp[other];
                    }
                }
            }
            dp[i] = total % MOD;
        }
        let mut sum: i64 = 0;
        for value in dp {
            sum += value;
        }
        (sum % MOD) as i32
    }
}
