impl Solution {
    pub fn flavor_reachable(stock: Vec<i32>, queries: Vec<Vec<i32>>) -> Vec<bool> {
        // Prefix sums: pref[i] is the total candies in types 0 .. i-1. The
        // earliest day type t can be touched is pref[t]/cap (eat cap every
        // day); the latest is pref[t] + stock[t] - 1 (eat one every
        // day). The query holds iff favoriteDay lies in that window.
        // Prefix sums reach 1e10, so they are held in 64-bit integers.
        let n = stock.len();
        let mut pref = vec![0i64; n + 1];
        for (i, &c) in stock.iter().enumerate() {
            pref[i + 1] = pref[i] + c as i64;
        }
        let mut answer = Vec::with_capacity(queries.len());
        for q in &queries {
            let t = q[0] as usize;
            let day = q[1] as i64;
            let cap = q[2] as i64;
            let earliest = pref[t] / cap;
            let latest = pref[t] + stock[t] as i64 - 1;
            answer.push(earliest <= day && day <= latest);
        }
        answer
    }
}
