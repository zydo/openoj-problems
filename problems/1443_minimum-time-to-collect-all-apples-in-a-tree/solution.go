func minTime(n int, edges [][]int, hasApple []bool) int {
	adjacency := make([][]int, n)
	for _, edge := range edges {
		a, b := edge[0], edge[1]
		adjacency[a] = append(adjacency[a], b)
		adjacency[b] = append(adjacency[b], a)
	}

	parent := make([]int, n)
	for i := range parent {
		parent[i] = -1
	}
	order := make([]int, 0, n)
	seen := make([]bool, n)
	seen[0] = true
	stack := []int{0}
	for len(stack) > 0 {
		u := stack[len(stack)-1]
		stack = stack[:len(stack)-1]
		order = append(order, u)
		for _, v := range adjacency[u] {
			if !seen[v] {
				seen[v] = true
				parent[v] = u
				stack = append(stack, v)
			}
		}
	}

	has := make([]bool, n)
	copy(has, hasApple)
	time := 0
	for i := len(order) - 1; i >= 0; i-- {
		u := order[i]
		if u == 0 {
			continue
		}
		if has[u] {
			time += 2
			has[parent[u]] = true
		}
	}
	return time
}
