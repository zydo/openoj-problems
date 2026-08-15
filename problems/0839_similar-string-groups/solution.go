func numSimilarGroups(strs []string) int {
	n := len(strs)
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

	similar := func(a, b string) bool {
		mismatches := 0
		for i := 0; i < len(a); i++ {
			if a[i] != b[i] {
				mismatches++
				if mismatches > 2 {
					return false
				}
			}
		}
		return mismatches == 0 || mismatches == 2
	}

	for i := 0; i < n; i++ {
		for j := i + 1; j < n; j++ {
			if similar(strs[i], strs[j]) {
				ri, rj := find(i), find(j)
				if ri != rj {
					parent[ri] = rj
				}
			}
		}
	}

	roots := make(map[int]bool)
	for i := 0; i < n; i++ {
		roots[find(i)] = true
	}
	return len(roots)
}
