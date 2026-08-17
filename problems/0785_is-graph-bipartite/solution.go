func isBipartite(graph [][]int) bool {
	n := len(graph)
	// 0 = uncolored, else +1/-1: bipartite iff a proper 2-coloring
	// exists, with each node's color forced by its distance parity
	// from the component root.
	color := make([]int, n)
	// The graph may be disconnected: start a fresh BFS from every
	// still-uncolored node.
	for start := 0; start < n; start++ {
		if color[start] != 0 {
			continue
		}
		color[start] = 1
		queue := []int{start}
		for head := 0; head < len(queue); head++ {
			u := queue[head]
			for _, v := range graph[u] {
				// Uncolored neighbor: take the opposite color.
				if color[v] == 0 {
					color[v] = -color[u]
					queue = append(queue, v)
				} else if color[v] == color[u] {
					// Same-color edge = odd cycle, the sole
					// obstruction to bipartiteness.
					return false
				}
			}
		}
	}
	// Every component colored cleanly: the two color classes are
	// the required partition.
	return true
}
