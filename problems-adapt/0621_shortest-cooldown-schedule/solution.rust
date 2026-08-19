impl Solution {
    pub fn shortest_cooldown_schedule(jobs: Vec<String>, n: i32) -> i32 {
        let mut counts: std::collections::HashMap<&str, i32> = std::collections::HashMap::new();
        for t in &jobs {
            *counts.entry(t.as_str()).or_insert(0) += 1;
        }
        let mut max_freq = 0;
        let mut num_max = 0;
        for &v in counts.values() {
            if v > max_freq {
                max_freq = v;
                num_max = 1;
            } else if v == max_freq {
                // Labels tying the max each occupy one slot of the final partial run.
                num_max += 1;
            }
        }
        let jobs_len = jobs.len() as i64;
        let n = n as i64;
        // The bottleneck letter frames (max_freq - 1) cycles of n + 1 plus the
        // final run; enough distinct jobs fill every gap, so never answer
        // less than the plain job count.
        let formula = (max_freq as i64 - 1) * (n + 1) + num_max as i64;
        jobs_len.max(formula) as i32
    }
}
