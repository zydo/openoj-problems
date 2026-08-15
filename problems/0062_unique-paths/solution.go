func uniquePaths(m int, n int) int {
	row := make([]int, n)
	for j := range row {
		row[j] = 1
	}
	for i := 1; i < m; i++ {
		for j := 1; j < n; j++ {
			row[j] += row[j-1]
		}
	}
	return row[n-1]
}
