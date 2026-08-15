func maximalSquare(matrix [][]string) int {
	m := len(matrix)
	n := len(matrix[0])
	best := 0
	prev := make([]int, n+1)
	for i := 0; i < m; i++ {
		curr := make([]int, n+1)
		for j := 0; j < n; j++ {
			if matrix[i][j] == "1" {
				v := prev[j]
				if prev[j+1] < v {
					v = prev[j+1]
				}
				if curr[j] < v {
					v = curr[j]
				}
				curr[j+1] = v + 1
				if curr[j+1] > best {
					best = curr[j+1]
				}
			}
		}
		prev = curr
	}
	return best * best
}
