func countSubmatrices(grid [][]int, k int) int {
	rows, cols := len(grid), len(grid[0])
	colSums := make([]int64, cols)
	count := 0
	for i := 0; i < rows; i++ {
		prefix := int64(0)
		for j := 0; j < cols; j++ {
			colSums[j] += int64(grid[i][j])
			prefix += colSums[j]
			if prefix > int64(k) {
				break
			}
			count++
		}
	}
	return count
}
