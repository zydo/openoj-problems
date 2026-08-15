func minimumCost(n int, edges [][]int, query [][]int) []int {
	parent := make([]int, n)
	size := make([]int, n)
	for i := range parent {
		parent[i] = i
		size[i] = 1
	}

	var find func(int) int
	find = func(x int) int {
		for parent[x] != x {
			parent[x] = parent[parent[x]]
			x = parent[x]
		}
		return x
	}
	union := func(a, b int) {
		ra, rb := find(a), find(b)
		if ra == rb {
			return
		}
		if size[ra] < size[rb] {
			ra, rb = rb, ra
		}
		parent[rb] = ra
		size[ra] += size[rb]
	}

	for _, e := range edges {
		union(e[0], e[1])
	}

	compAnd := make(map[int]int)
	for _, e := range edges {
		r := find(e[0])
		if _, ok := compAnd[r]; !ok {
			compAnd[r] = e[2]
		} else {
			compAnd[r] &= e[2]
		}
	}

	ans := make([]int, 0, len(query))
	for _, q := range query {
		rs, rt := find(q[0]), find(q[1])
		if rs != rt {
			ans = append(ans, -1)
		} else {
			ans = append(ans, compAnd[rs])
		}
	}
	return ans
}
