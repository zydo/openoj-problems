impl Solution {
    pub fn max_coins_from_stack_tops(stacks: Vec<Vec<i32>>, k: i32) -> i32 {
        let k = k as usize;
        // dp[j]: best value using exactly j coins from the stacks seen so far
        let mut dp = vec![0i32; k + 1];
        for pile in &stacks {
            // taking t coins from a pile means its top t: prefix[t]
            let mut prefix = Vec::with_capacity(pile.len() + 1);
            prefix.push(0i32);
            for &coin in pile {
                prefix.push(*prefix.last().unwrap() + coin);
            }
            // t stays within both the pile's size and the budget
            let take_max = pile.len().min(k);
            // fresh row so transitions only read the previous pile's dp
            let mut ndp = vec![0i32; k + 1];
            for j in 0..=k {
                // t = 0 case: skip this pile entirely
                let mut value = dp[j];
                let lim = take_max.min(j);
                for t in 1..=lim {
                    let cand = dp[j - t] + prefix[t];
                    if cand > value {
                        value = cand;
                    }
                }
                ndp[j] = value;
            }
            dp = ndp;
        }
        // coin values are positive, so using all k coins is never worse
        dp[k]
    }
}
