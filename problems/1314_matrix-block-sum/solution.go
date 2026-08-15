func matrixBlockSum(mat [][]int, k int) [][]int {
	m, n := len(mat), len(mat[0])
	prefix := make([][]int, m+1)
	for i := range prefix {
		prefix[i] = make([]int, n+1)
	}
	for i := 0; i < m; i++ {
		for j := 0; j < n; j++ {
			prefix[i+1][j+1] = prefix[i][j+1] + prefix[i+1][j] - prefix[i][j] + mat[i][j]
		}
	}
	answer := make([][]int, m)
	for i := 0; i < m; i++ {
		answer[i] = make([]int, n)
		for j := 0; j < n; j++ {
			r1, r2 := i-k, i+k+1
			if r1 < 0 {
				r1 = 0
			}
			if r2 > m {
				r2 = m
			}
			c1, c2 := j-k, j+k+1
			if c1 < 0 {
				c1 = 0
			}
			if c2 > n {
				c2 = n
			}
			answer[i][j] = prefix[r2][c2] - prefix[r1][c2] - prefix[r2][c1] + prefix[r1][c1]
		}
	}
	return answer
}
