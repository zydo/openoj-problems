impl Solution {
    pub fn count_locker_assignments(lockers: Vec<Vec<i32>>) -> i32 {
        const MOD: i64 = 1_000_000_007;
        let n = lockers.len();
        let full = (1usize << n) - 1;
        let mut h2p: Vec<Vec<usize>> = vec![Vec::new(); 41];
        for (p, prefs) in lockers.iter().enumerate() {
            for &h in prefs {
                h2p[h as usize].push(p);
            }
        }
        // dp[mask]: ways to give a locker to exactly the people in mask using lockers so far
        // (<=10 people -> 1024 states; lockers fold into the loop dimension)
        let mut dp = vec![0i64; full + 1];
        dp[0] = 1;
        for h in 1..=40usize {
            let people = &h2p[h];
            if people.is_empty() {
                continue;
            }
            // copy encodes leaving this locker unused; updating into the copy
            // (reading old dp) also ensures no locker is taken by two people
            let mut ndp = dp.clone();
            for mask in 0..=full {
                let v = dp[mask];
                if v == 0 {
                    continue;
                }
                for &p in people {
                    let bit = 1usize << p;
                    if mask & bit == 0 {
                        let nm = mask | bit;
                        ndp[nm] = (ndp[nm] + v) % MOD;
                    }
                }
            }
            dp = ndp;
        }
        // full mask: every person gets a locker; unused lockers cost nothing
        dp[full] as i32
    }
}
