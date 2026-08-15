func validTree(n int, edges [][]int) bool {
	if len(edges) != n-1 {
		return false
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
	for _, e := range edges {
		ra, rb := find(e[0]), find(e[1])
		if ra == rb {
			return false
		}
		parent[ra] = rb
	}
	return true
}
