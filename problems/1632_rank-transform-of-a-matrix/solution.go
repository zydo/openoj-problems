import "sort"

func matrixRankTransform(matrix [][]int) [][]int {
	m := len(matrix)
	n := len(matrix[0])
	// cells sorted by (value, r, c); idx = r*n + c encodes (r, c) order.
	cells := make([]int, m*n)
	for i := range cells {
		cells[i] = i
	}
	sort.Slice(cells, func(a, b int) bool {
		ia, ib := cells[a], cells[b]
		va := matrix[ia/n][ia%n]
		vb := matrix[ib/n][ib%n]
		if va != vb {
			return va < vb
		}
		return ia < ib
	})

	rowMax := make([]int, m)
	colMax := make([]int, n)
	ans := make([][]int, m)
	for r := range ans {
		ans[r] = make([]int, n)
	}

	parent := make([]int, m*n)
	var find func(int) int
	find = func(x int) int {
		for parent[x] != x {
			parent[x] = parent[parent[x]]
			x = parent[x]
		}
		return x
	}
	union := func(a int, b int) {
		ra, rb := find(a), find(b)
		if ra != rb {
			parent[rb] = ra
		}
	}

	i := 0
	count := len(cells)
	for i < count {
		value := matrix[cells[i]/n][cells[i]%n]
		group := []int{}
		j := i
		for j < count && matrix[cells[j]/n][cells[j]%n] == value {
			group = append(group, cells[j])
			j++
		}

		for _, idx := range group {
			parent[idx] = idx
		}
		byRow := make(map[int]int)
		for _, idx := range group {
			r := idx / n
			if prev, ok := byRow[r]; ok {
				union(idx, prev)
			} else {
				byRow[r] = idx
			}
		}
		byCol := make(map[int]int)
		for _, idx := range group {
			c := idx % n
			if prev, ok := byCol[c]; ok {
				union(idx, prev)
			} else {
				byCol[c] = idx
			}
		}

		compRank := make(map[int]int)
		for _, idx := range group {
			r := idx / n
			c := idx % n
			root := find(idx)
			candidate := rowMax[r]
			if colMax[c] > candidate {
				candidate = colMax[c]
			}
			candidate++
			if cur, ok := compRank[root]; !ok || candidate > cur {
				compRank[root] = candidate
			}
		}

		for _, idx := range group {
			r := idx / n
			c := idx % n
			rank := compRank[find(idx)]
			ans[r][c] = rank
			if rank > rowMax[r] {
				rowMax[r] = rank
			}
			if rank > colMax[c] {
				colMax[c] = rank
			}
		}

		i = j
	}

	return ans
}
