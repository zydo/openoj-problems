impl Solution {
    // The single negative person is the only sink; each positive person
    // is a source whose units cost their circular distance to the sink,
    // so the cheapest sources are drained first.
    pub fn min_moves(balance: Vec<i32>) -> i64 {
        let neg = balance.iter().position(|&v| v < 0);
        let Some(neg) = neg else {
            return 0;
        };
        let total: i64 = balance.iter().map(|&v| v as i64).sum();
        if total < 0 {
            return -1;
        }
        let n = balance.len();
        let mut need = -balance[neg] as i64;
        let mut sources: Vec<(i64, i64)> = Vec::new();
        for (i, &v) in balance.iter().enumerate() {
            if i != neg && v > 0 {
                let diff = (i as i64 - neg as i64).abs();
                sources.push((diff.min(n as i64 - diff), v as i64));
            }
        }
        sources.sort();
        let mut moves: i64 = 0;
        for (d, v) in sources {
            if need == 0 {
                break;
            }
            let take = v.min(need);
            moves += take * d;
            need -= take;
        }
        moves
    }
}
