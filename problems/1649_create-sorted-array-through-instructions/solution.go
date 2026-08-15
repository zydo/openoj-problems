func createSortedArray(instructions []int) int {
	const MOD = 1000000007
	m := 0
	for _, x := range instructions {
		if x > m {
			m = x
		}
	}
	tree := make([]int64, m+1)

	update := func(i int) {
		for i <= m {
			tree[i]++
			i += i & (-i)
		}
	}

	query := func(i int) int64 {
		var s int64
		for i > 0 {
			s += tree[i]
			i -= i & (-i)
		}
		return s
	}

	total := int64(0)
	count := int64(0)
	for _, x := range instructions {
		less := query(x - 1)
		greater := count - query(x)
		total = (total + min64(less, greater)) % MOD
		update(x)
		count++
	}
	return int(total)
}

func min64(a, b int64) int64 {
	if a < b {
		return a
	}
	return b
}
