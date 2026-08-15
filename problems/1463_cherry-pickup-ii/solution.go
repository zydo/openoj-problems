func cherryPickup(grid [][]int) int {
	rows := len(grid)
	cols := len(grid[0])
	const NEG = -(1 << 30)
	dp := make([][]int, cols)
	for c := range dp {
		dp[c] = make([]int, cols)
		for c2 := range dp[c] {
			dp[c][c2] = NEG
		}
	}
	dp[0][cols-1] = grid[0][0]
	if cols > 1 {
		dp[0][cols-1] += grid[0][cols-1]
	}
	for r := 1; r < rows; r++ {
		ndp := make([][]int, cols)
		for c := range ndp {
			ndp[c] = make([]int, cols)
			for c2 := range ndp[c] {
				ndp[c][c2] = NEG
			}
		}
		for c1 := 0; c1 < cols; c1++ {
			for c2 := 0; c2 < cols; c2++ {
				best := NEG
				for d1 := -1; d1 <= 1; d1++ {
					for d2 := -1; d2 <= 1; d2++ {
						p1, p2 := c1+d1, c2+d2
						if p1 >= 0 && p1 < cols && p2 >= 0 && p2 < cols && dp[p1][p2] > best {
							best = dp[p1][p2]
						}
					}
				}
				if best > NEG {
					ndp[c1][c2] = best + grid[r][c1]
					if c1 != c2 {
						ndp[c1][c2] += grid[r][c2]
					}
				}
			}
		}
		dp = ndp
	}
	ans := NEG
	for c1 := 0; c1 < cols; c1++ {
		for c2 := 0; c2 < cols; c2++ {
			if dp[c1][c2] > ans {
				ans = dp[c1][c2]
			}
		}
	}
	return ans
}
