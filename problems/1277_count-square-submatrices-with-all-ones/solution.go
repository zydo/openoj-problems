func countSquares(matrix [][]int) int {
	m := len(matrix)
	n := len(matrix[0])
	total := 0
	prev := make([]int, n)
	cur := make([]int, n)
	for i := 0; i < m; i++ {
		for j := 0; j < n; j++ {
			cur[j] = 0
			if matrix[i][j] == 0 {
				continue
			}
			if i == 0 || j == 0 {
				cur[j] = 1
			} else {
				best := prev[j]
				if cur[j-1] < best {
					best = cur[j-1]
				}
				if prev[j-1] < best {
					best = prev[j-1]
				}
				cur[j] = best + 1
			}
			total += cur[j]
		}
		prev, cur = cur, prev
	}
	return total
}
