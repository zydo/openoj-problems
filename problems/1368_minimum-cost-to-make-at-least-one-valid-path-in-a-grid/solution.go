func minCost(grid [][]int) int {
	m := len(grid)
	n := len(grid[0])
	di := [4]int{0, 0, 1, -1}
	dj := [4]int{1, -1, 0, 0}
	const inf = int(^uint(0) >> 1)
	dist := make([][]int, m)
	for i := range dist {
		dist[i] = make([]int, n)
		for j := range dist[i] {
			dist[i][j] = inf
		}
	}
	dist[0][0] = 0
	// 0-1 BFS as layered BFS: 0-cost moves stay in the current layer,
	// 1-cost moves go to the next layer.
	cur := [][2]int{{0, 0}}
	cost := 0
	for len(cur) > 0 {
		next := [][2]int{}
		for len(cur) > 0 {
			p := cur[len(cur)-1]
			cur = cur[:len(cur)-1]
			i, j := p[0], p[1]
			for s := 1; s <= 4; s++ {
				ni := i + di[s-1]
				nj := j + dj[s-1]
				if ni >= 0 && ni < m && nj >= 0 && nj < n {
					if grid[i][j] == s {
						if cost < dist[ni][nj] {
							dist[ni][nj] = cost
							cur = append(cur, [2]int{ni, nj})
						}
					} else if cost+1 < dist[ni][nj] {
						dist[ni][nj] = cost + 1
						next = append(next, [2]int{ni, nj})
					}
				}
			}
		}
		cur = next
		cost++
	}
	return dist[m-1][n-1]
}
