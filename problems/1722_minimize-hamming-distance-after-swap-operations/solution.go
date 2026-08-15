func minimumHammingDistance(source []int, target []int, allowedSwaps [][]int) int {
	n := len(source)
	parent := make([]int, n)
	for i := range parent {
		parent[i] = i
	}

	var find func(x int) int
	find = func(x int) int {
		for parent[x] != x {
			parent[x] = parent[parent[x]]
			x = parent[x]
		}
		return x
	}

	for _, swap := range allowedSwaps {
		ra, rb := find(swap[0]), find(swap[1])
		if ra != rb {
			parent[ra] = rb
		}
	}

	groups := make(map[int][]int)
	for i := 0; i < n; i++ {
		r := find(i)
		groups[r] = append(groups[r], i)
	}

	distance := 0
	for _, members := range groups {
		have := make(map[int]int)
		for _, i := range members {
			have[source[i]]++
		}
		for _, i := range members {
			v := target[i]
			if have[v] > 0 {
				have[v]--
			} else {
				distance++
			}
		}
	}
	return distance
}
