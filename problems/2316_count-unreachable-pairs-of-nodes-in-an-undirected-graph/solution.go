func countPairs(n int, edges [][]int) int64 {
	parent := make([]int, n)
	size := make([]int, n)
	for i := 0; i < n; i++ {
		parent[i] = i
		size[i] = 1
	}

	var find func(int) int
	find = func(x int) int {
		root := x
		for parent[root] != root {
			root = parent[root]
		}
		for parent[x] != root {
			parent[x], x = root, parent[x]
		}
		return root
	}

	for _, e := range edges {
		ra, rb := find(e[0]), find(e[1])
		if ra != rb {
			if size[ra] < size[rb] {
				ra, rb = rb, ra
			}
			parent[rb] = ra
			size[ra] += size[rb]
		}
	}

	reachable := int64(0)
	for v := 0; v < n; v++ {
		if find(v) == v {
			reachable += int64(size[v]) * int64(size[v]-1) / 2
		}
	}
	totalPairs := int64(n) * int64(n-1) / 2
	return totalPairs - reachable
}
