func longestSharedRun(first []int, second []int) int {
	m, n := len(first), len(second)
	// dp[j] = longest common run starting exactly at first[i+1], second[j];
	// sweeping i downward keeps row i+1 available when row i is computed.
	dp := make([]int, n+1)
	best := 0
	for i := m - 1; i >= 0; i-- {
		cur := make([]int, n+1)
		for j := n - 1; j >= 0; j-- {
			if first[i] == second[j] {
				// Match extends the run starting at (i+1, j+1); a mismatch
				// leaves 0 — no shared subarray starts there.
				cur[j] = dp[j+1] + 1
				if cur[j] > best {
					best = cur[j]
				}
			}
		}
		// Roll: only the previous row is ever read.
		dp = cur
	}
	return best
}
