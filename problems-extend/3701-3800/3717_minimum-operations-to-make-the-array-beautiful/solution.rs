impl Solution {
    pub fn min_operations(nums: Vec<i32>) -> i32 {
        // Position 0 is frozen, so every later value is a multiple of the
        // one before it. Cap the value axis at 2 * max(nums): no optimal
        // chain ever needs a value above that (exchange argument in
        // solutions.md).
        let n = nums.len();
        if n == 1 {
            return 0;
        }
        let max_val = *nums.iter().max().unwrap();
        let cap = 2 * max_val;
        let cap = cap as usize;
        let inf = 1_000_000_000i32;
        let mut dp = vec![inf; cap + 1];
        dp[nums[0] as usize] = 0;
        for &x in &nums[1..] {
            let mut ndp = vec![inf; cap + 1];
            for u in 1..=cap {
                if dp[u] >= inf {
                    continue;
                }
                // First multiple of u reaching x, then every multiple after.
                let start = ((x + u as i32 - 1) / u as i32) * u as i32;
                let start = start as usize;
                let mut v = start;
                while v <= cap {
                    let cand = dp[u] + (v as i32 - x);
                    if cand < ndp[v] {
                        ndp[v] = cand;
                    }
                    v += u;
                }
            }
            dp = ndp;
        }
        dp.into_iter().min().unwrap()
    }
}
