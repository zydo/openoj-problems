impl Solution {
    pub fn number_of_categories(kindOracle: &mut KindOracle, n: i32) -> i32 {
        // Keep one representative index per kind discovered so far.
        // Kind-sharing is an equivalence relation behind the oracle, so
        // by transitivity element i shares a kind with some earlier
        // element exactly when it shares one with that kind's
        // representative: scanning representatives only never misses a
        // join and never invents one. A miss across all representatives
        // means i opens a genuinely new kind and becomes its
        // representative; at most i queries are spent on element i, so
        // the whole sweep stays within n(n-1)/2 calls.
        let mut representatives: Vec<i32> = Vec::with_capacity(n as usize);
        for i in 0..n {
            let mut joined = false;
            for &rep in &representatives {
                if kindOracle.has_same_kind(i, rep) {
                    joined = true;
                    break;
                }
            }
            if !joined {
                representatives.push(i);
            }
        }
        representatives.len() as i32
    }
}
