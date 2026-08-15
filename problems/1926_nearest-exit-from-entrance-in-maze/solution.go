func nearestExit(maze [][]string, entrance []int) int {
	m, n := len(maze), len(maze[0])
	er, ec := entrance[0], entrance[1]
	dist := make([][]int, m)
	for i := range dist {
		dist[i] = make([]int, n)
		for j := range dist[i] {
			dist[i][j] = -1
		}
	}
	dist[er][ec] = 0
	q := [][2]int{{er, ec}}
	for head := 0; head < len(q); head++ {
		i, j := q[head][0], q[head][1]
		if (i == 0 || i == m-1 || j == 0 || j == n-1) && !(i == er && j == ec) {
			return dist[i][j]
		}
		for _, d := range [4][2]int{{1, 0}, {-1, 0}, {0, 1}, {0, -1}} {
			ni, nj := i+d[0], j+d[1]
			if ni >= 0 && ni < m && nj >= 0 && nj < n && maze[ni][nj] == "." && dist[ni][nj] == -1 {
				dist[ni][nj] = dist[i][j] + 1
				q = append(q, [2]int{ni, nj})
			}
		}
	}
	return -1
}
