func numIslands2(m int, n int, positions [][]int) []int {
	parent := make([]int, m*n)
	size := make([]int, m*n)
	land := make([]bool, m*n)
	for i := range parent {
		parent[i] = i
		size[i] = 1
	}
	var find func(int) int
	find = func(x int) int {
		for parent[x] != x {
			parent[x] = parent[parent[x]]
			x = parent[x]
		}
		return x
	}
	count := 0
	answer := make([]int, 0, len(positions))
	dr := [4]int{1, -1, 0, 0}
	dc := [4]int{0, 0, 1, -1}
	for _, pos := range positions {
		r, c := pos[0], pos[1]
		cell := r*n + c
		if land[cell] {
			answer = append(answer, count)
			continue
		}
		land[cell] = true
		count++
		for k := 0; k < 4; k++ {
			nr, nc := r+dr[k], c+dc[k]
			if nr < 0 || nr >= m || nc < 0 || nc >= n || !land[nr*n+nc] {
				continue
			}
			ra, rb := find(cell), find(nr*n+nc)
			if ra != rb {
				if size[ra] < size[rb] {
					ra, rb = rb, ra
				}
				parent[rb] = ra
				size[ra] += size[rb]
				count--
			}
		}
		answer = append(answer, count)
	}
	return answer
}
