func buildMatrix(k int, rowConditions [][]int, colConditions [][]int) [][]int {
	rowOrder, ok := topoOrder(k, rowConditions)
	if !ok {
		return [][]int{}
	}
	colOrder, ok := topoOrder(k, colConditions)
	if !ok {
		return [][]int{}
	}
	rowPos := make([]int, k+1)
	colPos := make([]int, k+1)
	for i, v := range rowOrder {
		rowPos[v] = i
	}
	for i, v := range colOrder {
		colPos[v] = i
	}
	matrix := make([][]int, k)
	for i := range matrix {
		matrix[i] = make([]int, k)
	}
	for v := 1; v <= k; v++ {
		matrix[rowPos[v]][colPos[v]] = v
	}
	return matrix
}

func topoOrder(k int, conditions [][]int) ([]int, bool) {
	adj := make([][]int, k+1)
	indeg := make([]int, k+1)
	for _, c := range conditions {
		adj[c[0]] = append(adj[c[0]], c[1])
		indeg[c[1]]++
	}
	queue := make([]int, 0, k)
	for v := 1; v <= k; v++ {
		if indeg[v] == 0 {
			queue = append(queue, v)
		}
	}
	order := make([]int, 0, k)
	for head := 0; head < len(queue); head++ {
		u := queue[head]
		order = append(order, u)
		for _, w := range adj[u] {
			indeg[w]--
			if indeg[w] == 0 {
				queue = append(queue, w)
			}
		}
	}
	if len(order) != k {
		return nil, false
	}
	return order, true
}
