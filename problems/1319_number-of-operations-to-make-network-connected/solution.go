func makeConnected(n int, connections [][]int) int {
	if len(connections) < n-1 {
		return -1
	}
	parent := make([]int, n)
	for i := range parent {
		parent[i] = i
	}
	var find func(int) int
	find = func(x int) int {
		for parent[x] != x {
			parent[x] = parent[parent[x]]
			x = parent[x]
		}
		return x
	}
	components := n
	for _, c := range connections {
		ra, rb := find(c[0]), find(c[1])
		if ra != rb {
			parent[ra] = rb
			components--
		}
	}
	return components - 1
}
