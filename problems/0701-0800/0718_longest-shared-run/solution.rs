impl Solution {
    pub fn longest_shared_run(first: Vec<i32>, second: Vec<i32>) -> i32 {
        let (m, n) = (first.len(), second.len());
        // dp[j] = longest common run starting exactly at first[i+1], second[j];
        // sweeping i downward keeps row i+1 available when row i is computed.
        let mut dp = vec![0i32; n + 1];
        let mut best = 0i32;
        for i in (0..m).rev() {
            let mut cur = vec![0i32; n + 1];
            for j in (0..n).rev() {
                if first[i] == second[j] {
                    // Match extends the run starting at (i+1, j+1); a mismatch
                    // leaves 0 — no shared subarray starts there.
                    cur[j] = dp[j + 1] + 1;
                    if cur[j] > best {
                        best = cur[j];
                    }
                }
            }
            // Roll: only the previous row is ever read.
            dp = cur;
        }
        best
    }
}
