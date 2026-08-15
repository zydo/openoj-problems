func getPermutationIndex(perm []int) int {
	const MOD = 1000000007
	n := len(perm)
	fact := make([]int64, n)
	fact[0] = 1
	for i := 1; i < n; i++ {
		fact[i] = fact[i-1] * int64(i) % MOD
	}

	tree := make([]int64, n+1)
	add := func(i, delta int) {
		for ; i <= n; i += i & -i {
			tree[i] += int64(delta)
		}
	}
	query := func(i int) int64 {
		var s int64
		for ; i > 0; i -= i & -i {
			s += tree[i]
		}
		return s
	}

	for v := 1; v <= n; v++ {
		add(v, 1)
	}

	var ans int64
	for i, x := range perm {
		smaller := query(x - 1)
		ans = (ans + smaller%MOD*fact[n-1-i]) % MOD
		add(x, -1)
	}
	return int(ans)
}
