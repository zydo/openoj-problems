func countSubIslands(grid1 [][]int, grid2 [][]int) int {
	m, n := len(grid2), len(grid2[0])
	seen := make([][]bool, m)
	for i := range seen {
		seen[i] = make([]bool, n)
	}
	count := 0
	for si := 0; si < m; si++ {
		for sj := 0; sj < n; sj++ {
			if grid2[si][sj] == 1 && !seen[si][sj] {
				seen[si][sj] = true
				stack := [][2]int{{si, sj}}
				isSub := true
				for len(stack) > 0 {
					top := stack[len(stack)-1]
					stack = stack[:len(stack)-1]
					x, y := top[0], top[1]
					if grid1[x][y] != 1 {
						isSub = false
					}
					for _, d := range [4][2]int{{1, 0}, {-1, 0}, {0, 1}, {0, -1}} {
						nx, ny := x+d[0], y+d[1]
						if nx >= 0 && nx < m && ny >= 0 && ny < n && grid2[nx][ny] == 1 && !seen[nx][ny] {
							seen[nx][ny] = true
							stack = append(stack, [2]int{nx, ny})
						}
					}
				}
				if isSub {
					count++
				}
			}
		}
	}
	return count
}
