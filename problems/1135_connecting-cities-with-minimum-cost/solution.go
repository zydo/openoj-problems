import "sort"

func minimumCost(n int, connections [][]int) int {
	conns := make([][]int, len(connections))
	copy(conns, connections)
	sort.Slice(conns, func(i, j int) bool { return conns[i][2] < conns[j][2] })

	parent := make([]int, n+1)
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

	total := 0
	components := n
	for _, c := range conns {
		rx, ry := find(c[0]), find(c[1])
		if rx != ry {
			parent[rx] = ry
			total += c[2]
			components--
			if components == 1 {
				return total
			}
		}
	}
	return -1
}
