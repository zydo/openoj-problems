func canTraverseAllPairs(nums []int) bool {
	n := len(nums)
	if n == 1 {
		return true
	}
	for _, x := range nums {
		if x == 1 {
			return false
		}
	}

	maxv := 0
	for _, x := range nums {
		if x > maxv {
			maxv = x
		}
	}
	spf := make([]int, maxv+1)
	for i := range spf {
		spf[i] = i
	}
	for i := 2; i*i <= maxv; i++ {
		if spf[i] == i {
			for j := i * i; j <= maxv; j += i {
				if spf[j] == j {
					spf[j] = i
				}
			}
		}
	}

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

	union := func(a, b int) {
		ra, rb := find(a), find(b)
		if ra != rb {
			parent[ra] = rb
		}
	}

	last := make(map[int]int)
	for i, x := range nums {
		v := x
		for v > 1 {
			p := spf[v]
			if j, ok := last[p]; ok {
				union(i, j)
			}
			last[p] = i
			for v%p == 0 {
				v /= p
			}
		}
	}

	root := find(0)
	for i := 1; i < n; i++ {
		if find(i) != root {
			return false
		}
	}
	return true
}
