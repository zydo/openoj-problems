import "sort"

func minScore(grid [][]int) [][]int {
	m, n := len(grid), len(grid[0])
	type cell struct {
		v, r, c int
	}
	cells := make([]cell, 0, m*n)
	for r := 0; r < m; r++ {
		for c := 0; c < n; c++ {
			cells = append(cells, cell{grid[r][c], r, c})
		}
	}
	sort.Slice(cells, func(i, j int) bool {
		if cells[i].v != cells[j].v {
			return cells[i].v < cells[j].v
		}
		if cells[i].r != cells[j].r {
			return cells[i].r < cells[j].r
		}
		return cells[i].c < cells[j].c
	})
	rowMax := make([]int, m)
	colMax := make([]int, n)
	res := make([][]int, m)
	for r := range res {
		res[r] = make([]int, n)
	}
	for _, cl := range cells {
		v := 1 + rowMax[cl.r]
		if colMax[cl.c] > v-1 {
			v = 1 + colMax[cl.c]
		}
		res[cl.r][cl.c] = v
		rowMax[cl.r] = v
		colMax[cl.c] = v
	}
	return res
}
