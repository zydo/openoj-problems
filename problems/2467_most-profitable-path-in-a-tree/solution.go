func mostProfitablePath(edges [][]int, bob int, amount []int) int {
	n := len(amount)
	adj := make([][]int, n)
	for i := range adj {
		adj[i] = make([]int, 0, 4)
	}
	for _, e := range edges {
		adj[e[0]] = append(adj[e[0]], e[1])
		adj[e[1]] = append(adj[e[1]], e[0])
	}

	parent := make([]int, n)
	depth := make([]int, n)
	seen := make([]bool, n)
	for i := range parent {
		parent[i] = -1
	}
	seen[0] = true
	order := make([]int, 0, n)
	queue := []int{0}
	for head := 0; head < len(queue); head++ {
		u := queue[head]
		order = append(order, u)
		for _, v := range adj[u] {
			if !seen[v] {
				seen[v] = true
				parent[v] = u
				depth[v] = depth[u] + 1
				queue = append(queue, v)
			}
		}
	}

	bobTime := make(map[int]int)
	t := 0
	node := bob
	for node != -1 {
		bobTime[node] = t
		t++
		node = parent[node]
	}

	income := make([]int, n)
	hasBest := false
	best := 0
	for _, u := range order {
		d := depth[u]
		bt, ok := bobTime[u]
		var gain int
		if !ok || bt > d {
			gain = amount[u]
		} else if bt == d {
			// Floor division (Python semantics) for negative amounts.
			gain = amount[u] / 2
			if amount[u] < 0 && amount[u]%2 != 0 {
				gain--
			}
		} else {
			gain = 0
		}
		if u != 0 {
			income[u] = income[parent[u]] + gain
		} else {
			income[u] = gain
		}
		if u != 0 && len(adj[u]) == 1 {
			if !hasBest || income[u] > best {
				best = income[u]
				hasBest = true
			}
		}
	}
	return best
}
