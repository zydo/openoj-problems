func maxDistance(grid [][]int) int {
	n := len(grid)
	g := make([][]int, n)
	for i := range grid {
		g[i] = append([]int(nil), grid[i]...)
	}
	type cell struct{ i, j int }
	queue := []cell{}
	for i := 0; i < n; i++ {
		for j := 0; j < n; j++ {
			if g[i][j] == 1 {
				queue = append(queue, cell{i, j})
			}
		}
	}
	if len(queue) == 0 || len(queue) == n*n {
		return -1
	}
	dist := 0
	head := 0
	for head < len(queue) {
		dist++
		size := len(queue)
		for ; head < size; head++ {
			c := queue[head]
			for _, d := range [4]cell{{1, 0}, {-1, 0}, {0, 1}, {0, -1}} {
				ni, nj := c.i+d.i, c.j+d.j
				if ni >= 0 && ni < n && nj >= 0 && nj < n && g[ni][nj] == 0 {
					g[ni][nj] = 1
					queue = append(queue, cell{ni, nj})
				}
			}
		}
	}
	return dist - 1
}
