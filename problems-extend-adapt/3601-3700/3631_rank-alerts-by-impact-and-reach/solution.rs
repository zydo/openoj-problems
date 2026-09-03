impl Solution {
    pub fn rank_alerts(alerts: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
        // One sort with the composite key (descending score, ascending
        // ID). IDs are unique, so the order is total and deterministic.
        // The score 2 * sev + exp reaches 3e9, past 32-bit range, so the
        // key is computed in i64.
        let mut alerts = alerts;
        alerts.sort_by(|a, b| {
            let score_a = 2 * a[1] as i64 + a[2] as i64;
            let score_b = 2 * b[1] as i64 + b[2] as i64;
            score_b.cmp(&score_a).then(a[0].cmp(&b[0]))
        });
        alerts
    }
}
