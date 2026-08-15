func maxSubgraphScore(n int, edges [][]int, good []int) []int {
	const NEG = int64(-1) << 60
	adj := make([][]int, n)
	for _, e := range edges {
		adj[e[0]] = append(adj[e[0]], e[1])
		adj[e[1]] = append(adj[e[1]], e[0])
	}

	parent := make([]int, n)
	for i := range parent {
		parent[i] = -1
	}
	children := make([][]int, n)
	order := []int{}
	stack := []int{0}
	parent[0] = -2
	for len(stack) > 0 {
		u := stack[len(stack)-1]
		stack = stack[:len(stack)-1]
		order = append(order, u)
		for _, v := range adj[u] {
			if v == parent[u] {
				continue
			}
			parent[v] = u
			children[u] = append(children[u], v)
			stack = append(stack, v)
		}
	}

	weight := make([]int, n)
	for i, g := range good {
		if g != 0 {
			weight[i] = 1
		} else {
			weight[i] = -1
		}
	}

	down := make([]int64, n)
	for i := len(order) - 1; i >= 0; i-- {
		u := order[i]
		s := int64(weight[u])
		for _, c := range children[u] {
			if down[c] > 0 {
				s += down[c]
			}
		}
		down[u] = s
	}

	up := make([]int64, n)
	up[0] = NEG
	result := make([]int, n)
	for _, u := range order {
		var totalPos int64
		for _, c := range children[u] {
			if down[c] > 0 {
				totalPos += down[c]
			}
		}
		for _, c := range children[u] {
			dc := down[c]
			if dc < 0 {
				dc = 0
			}
			uu := up[u]
			if uu < 0 {
				uu = 0
			}
			up[c] = int64(weight[u]) + (totalPos - dc) + uu
		}
		uu := up[u]
		if uu < 0 {
			uu = 0
		}
		result[u] = weight[u] + int(totalPos) + int(uu)
	}
	return result
}
