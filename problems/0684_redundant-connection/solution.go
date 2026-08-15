func findRedundantConnection(edges [][]int) []int {
	parent := make(map[int]int)

	var find func(node int) int
	find = func(node int) int {
		root := node
		for parent[root] != root {
			root = parent[root]
		}
		for parent[node] != root {
			next := parent[node]
			parent[node] = root
			node = next
		}
		return root
	}

	union := func(a, b int) bool {
		if _, ok := parent[a]; !ok {
			parent[a] = a
		}
		if _, ok := parent[b]; !ok {
			parent[b] = b
		}
		ra, rb := find(a), find(b)
		if ra == rb {
			return false
		}
		parent[ra] = rb
		return true
	}

	for _, edge := range edges {
		if !union(edge[0], edge[1]) {
			return edge
		}
	}
	return nil
}
