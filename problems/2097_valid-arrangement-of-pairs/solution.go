func validArrangement(pairs [][]int) [][]int {
	adj := make(map[int][]int)
	indeg := make(map[int]int)
	outdeg := make(map[int]int)
	for _, p := range pairs {
		u, v := p[0], p[1]
		adj[u] = append(adj[u], v)
		outdeg[u]++
		indeg[v]++
	}

	start := pairs[0][0]
	// At most one vertex has outdeg - indeg == 1 when an Euler path exists;
	// scan sources in first-appearance order like the reference.
	for _, p := range pairs {
		u := p[0]
		if outdeg[u]-indeg[u] == 1 {
			start = u
			break
		}
	}

	stack := make([]int, 0, len(pairs)+1)
	stack = append(stack, start)
	path := make([]int, 0, len(pairs)+1)
	for len(stack) > 0 {
		u := stack[len(stack)-1]
		edges := adj[u]
		if len(edges) > 0 {
			v := edges[len(edges)-1]
			adj[u] = edges[:len(edges)-1]
			stack = append(stack, v)
		} else {
			path = append(path, u)
			stack = stack[:len(stack)-1]
		}
	}

	// reverse path
	for i, j := 0, len(path)-1; i < j; i, j = i+1, j-1 {
		path[i], path[j] = path[j], path[i]
	}

	res := make([][]int, 0, len(path)-1)
	for i := 0; i+1 < len(path); i++ {
		res = append(res, []int{path[i], path[i+1]})
	}
	return res
}
