func highestPeak(isWater [][]int) [][]int {
	m, n := len(isWater), len(isWater[0])
	height := make([][]int, m)
	for i := range height {
		height[i] = make([]int, n)
		for j := range height[i] {
			height[i][j] = -1
		}
	}
	q := make([][2]int, 0)
	for i := 0; i < m; i++ {
		for j := 0; j < n; j++ {
			if isWater[i][j] == 1 {
				height[i][j] = 0
				q = append(q, [2]int{i, j})
			}
		}
	}
	for head := 0; head < len(q); head++ {
		i, j := q[head][0], q[head][1]
		for _, d := range [4][2]int{{1, 0}, {-1, 0}, {0, 1}, {0, -1}} {
			ni, nj := i+d[0], j+d[1]
			if ni >= 0 && ni < m && nj >= 0 && nj < n && height[ni][nj] == -1 {
				height[ni][nj] = height[i][j] + 1
				q = append(q, [2]int{ni, nj})
			}
		}
	}
	return height
}
