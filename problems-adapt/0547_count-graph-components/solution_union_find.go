func countComponents(adjacency [][]int) int {
	n := len(adjacency)
	parent := make([]int, n)
	for i := range parent {
		parent[i] = i
	}
	// Path-halving: splice every other node directly under its
	// grandparent, flattening the tree while walking to the root.
	var find func(int) int
	find = func(x int) int {
		for parent[x] != x {
			parent[x] = parent[parent[x]]
			x = parent[x]
		}
		return x
	}
	// Every city begins as its own component; only a
	// successful union ever reduces the count.
	components := n
	// The matrix is symmetric, so scanning pairs i < j feeds every
	// road to the union exactly once; the diagonal is skipped.
	for i := 0; i < n; i++ {
		for j := i + 1; j < n; j++ {
			if adjacency[i][j] == 1 {
				ri, rj := find(i), find(j)
				// A road joining two distinct roots merges two components;
				// one whose cities already share a root is redundant.
				if ri != rj {
					parent[ri] = rj
					components--
				}
			}
		}
	}
	return components
}
