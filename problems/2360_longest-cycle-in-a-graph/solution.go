func longestCycle(edges []int) int {
	n := len(edges)
	color := make([]int, n)
	step := make([]int, n)
	timer := 1
	best := -1
	for start := 0; start < n; start++ {
		if color[start] != 0 {
			continue
		}
		node := start
		var path []int
		for node != -1 && color[node] == 0 {
			color[node] = 1
			step[node] = timer
			timer++
			path = append(path, node)
			node = edges[node]
		}
		if node != -1 && color[node] == 1 {
			if l := timer - step[node]; l > best {
				best = l
			}
		}
		for _, v := range path {
			color[v] = 2
		}
	}
	return best
}
