func isBipartite(graph [][]int) bool {
	n := len(graph)
	color := make([]int, n)
	for start := 0; start < n; start++ {
		if color[start] != 0 {
			continue
		}
		color[start] = 1
		queue := []int{start}
		for head := 0; head < len(queue); head++ {
			u := queue[head]
			for _, v := range graph[u] {
				if color[v] == 0 {
					color[v] = -color[u]
					queue = append(queue, v)
				} else if color[v] == color[u] {
					return false
				}
			}
		}
	}
	return true
}
