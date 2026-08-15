import "sort"

func minTime(n int, edges [][]int, k int) int {
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
	union := func(a, b int) bool {
		ra, rb := find(a), find(b)
		if ra == rb {
			return false
		}
		parent[ra] = rb
		return true
	}

	ordered := make([][]int, len(edges))
	copy(ordered, edges)
	sort.Slice(ordered, func(a, b int) bool {
		return ordered[a][2] > ordered[b][2]
	})

	components := n
	answer := 0
	i := 0
	m := len(ordered)
	for i < m {
		t := ordered[i][2]
		if components >= k {
			answer = t
		}
		for i < m && ordered[i][2] == t {
			if union(ordered[i][0], ordered[i][1]) {
				components--
			}
			i++
		}
	}
	if components >= k {
		answer = 0
	}
	return answer
}
