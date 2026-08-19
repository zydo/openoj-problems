impl Solution {
    pub fn min_coins_to_cover_sums(coins: Vec<i32>, target: i32) -> i32 {
        let mut sorted = coins;
        sorted.sort_unstable();
        let mut reach: i64 = 0; // every value in [1, reach] is obtainable
        let mut added: i32 = 0;
        let mut i = 0usize;
        while reach < target as i64 {
            if i < sorted.len() && sorted[i] as i64 <= reach + 1 {
                reach += sorted[i] as i64;
                i += 1;
            } else {
                // must add the coin worth reach + 1
                reach += reach + 1;
                added += 1;
            }
        }
        added
    }
}
