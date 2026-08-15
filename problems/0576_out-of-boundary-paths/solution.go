func findPaths(m int, n int, maxMove int, startRow int, startColumn int) int {
	const MOD = 1000000007
	if maxMove == 0 {
		return 0
	}
	prev := make([][]int, m)
	for i := range prev {
		prev[i] = make([]int, n)
	}
	for step := 0; step < maxMove; step++ {
		cur := make([][]int, m)
		for i := range cur {
			cur[i] = make([]int, n)
		}
		for i := 0; i < m; i++ {
			for j := 0; j < n; j++ {
				total := 0
				if i+1 >= m {
					total++
				} else {
					total += prev[i+1][j]
				}
				if i-1 < 0 {
					total++
				} else {
					total += prev[i-1][j]
				}
				if j+1 >= n {
					total++
				} else {
					total += prev[i][j+1]
				}
				if j-1 < 0 {
					total++
				} else {
					total += prev[i][j-1]
				}
				cur[i][j] = total % MOD
			}
		}
		prev = cur
	}
	return prev[startRow][startColumn] % MOD
}
