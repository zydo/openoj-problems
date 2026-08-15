import "sort"

func minCost(n int, edges [][]int, k int) int {
	if k >= n {
		return 0
	}

	feasible := func(t int) bool {
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
		comps := n
		for _, e := range edges {
			if e[2] <= t {
				ru := find(e[0])
				rv := find(e[1])
				if ru != rv {
					parent[ru] = rv
					comps--
				}
			}
		}
		return comps <= k
	}

	if feasible(0) {
		return 0
	}
	weightSet := map[int]struct{}{}
	for _, e := range edges {
		weightSet[e[2]] = struct{}{}
	}
	weights := make([]int, 0, len(weightSet))
	for w := range weightSet {
		weights = append(weights, w)
	}
	sort.Ints(weights)
	lo, hi := 0, len(weights)-1
	for lo < hi {
		mid := lo + (hi-lo)/2
		if feasible(weights[mid]) {
			hi = mid
		} else {
			lo = mid + 1
		}
	}
	return weights[lo]
}
