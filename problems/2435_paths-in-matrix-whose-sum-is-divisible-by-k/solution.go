func numberOfPaths(grid [][]int, k int) int {
	const MOD = 1000000007
	m := len(grid)
	n := len(grid[0])
	dp := make([][]int64, n)
	alive := make([]bool, n)
	for i := 0; i < m; i++ {
		for j := 0; j < n; j++ {
			g := ((grid[i][j] % k) + k) % k
			if i == 0 && j == 0 {
				first := make([]int64, k)
				first[g] = 1
				dp[j] = first
				alive[j] = true
				continue
			}
			cur := make([]int64, k)
			if i > 0 && alive[j] {
				above := dp[j]
				for v := 0; v < k; v++ {
					src := ((v-g)%k + k) % k
					cur[v] = above[src]
				}
			}
			if j > 0 && alive[j-1] {
				left := dp[j-1]
				for v := 0; v < k; v++ {
					src := ((v-g)%k + k) % k
					cur[v] = (cur[v] + left[src]) % MOD
				}
			}
			dp[j] = cur
			alive[j] = true
		}
	}
	return int(dp[n-1][0] % MOD)
}
