func countComponents(n int, edges [][]int) int {
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
	count := n
	for _, e := range edges {
		ra, rb := find(e[0]), find(e[1])
		if ra != rb {
			parent[ra] = rb
			count--
		}
	}
	return count
}
