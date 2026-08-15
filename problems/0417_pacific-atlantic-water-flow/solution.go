func pacificAtlantic(heights [][]int) [][]int {
	m, n := len(heights), len(heights[0])

	reachable := func(border [][2]int) [][]bool {
		seen := make([][]bool, m)
		for r := range seen {
			seen[r] = make([]bool, n)
		}
		stack := make([][2]int, 0, m*n)
		for _, cell := range border {
			if !seen[cell[0]][cell[1]] {
				seen[cell[0]][cell[1]] = true
			}
			stack = append(stack, cell)
		}
		dirs := [4][2]int{{1, 0}, {-1, 0}, {0, 1}, {0, -1}}
		for len(stack) > 0 {
			cell := stack[len(stack)-1]
			stack = stack[:len(stack)-1]
			r, c := cell[0], cell[1]
			for _, d := range dirs {
				nr, nc := r+d[0], c+d[1]
				if nr >= 0 && nr < m && nc >= 0 && nc < n &&
					!seen[nr][nc] && heights[nr][nc] >= heights[r][c] {
					seen[nr][nc] = true
					stack = append(stack, [2]int{nr, nc})
				}
			}
		}
		return seen
	}

	pacificBorder := make([][2]int, 0, m+n)
	for c := 0; c < n; c++ {
		pacificBorder = append(pacificBorder, [2]int{0, c})
	}
	for r := 0; r < m; r++ {
		pacificBorder = append(pacificBorder, [2]int{r, 0})
	}
	atlanticBorder := make([][2]int, 0, m+n)
	for c := 0; c < n; c++ {
		atlanticBorder = append(atlanticBorder, [2]int{m - 1, c})
	}
	for r := 0; r < m; r++ {
		atlanticBorder = append(atlanticBorder, [2]int{r, n - 1})
	}

	pacific := reachable(pacificBorder)
	atlantic := reachable(atlanticBorder)

	result := [][]int{}
	for r := 0; r < m; r++ {
		for c := 0; c < n; c++ {
			if pacific[r][c] && atlantic[r][c] {
				result = append(result, []int{r, c})
			}
		}
	}
	return result
}
