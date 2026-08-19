import "sort"

func fewestOverwrites(values []int, pool []int) int {
	b := append([]int(nil), pool...)
	sort.Ints(b)
	m := 0
	for _, v := range b {
		if m == 0 || v != b[m-1] {
			b[m] = v
			m++
		}
	}
	b = b[:m]

	// bisectRight returns the index of the first element > key.
	bisectRight := func(key int) int {
		return sort.Search(m, func(i int) bool { return b[i] > key })
	}

	// dp: strictly increasing prefix whose last value is v -> min ops.
	// keeping values[0] costs 0; any smaller replacement costs 1 (larger
	// replacements are dominated by keeping)
	dp := map[int]int{values[0]: 0}
	for _, v := range b {
		if v < values[0] {
			dp[v] = 1
		}
	}

	for i := 1; i < len(values); i++ {
		ndp := make(map[int]int)
		for last, ops := range dp {
			// keep values[i] when it strictly exceeds last: no cost
			if values[i] > last {
				if cur, ok := ndp[values[i]]; !ok || cur > ops {
					ndp[values[i]] = ops
				}
			}
			// replace with the smallest pool value > last: the smallest
			// choice leaves the most room for what follows; costs 1 op
			idx := bisectRight(last)
			if idx < m {
				v := b[idx]
				cost := ops + 1
				if cur, ok := ndp[v]; !ok || cur > cost {
					ndp[v] = cost
				}
			}
		}
		dp = ndp
		// no state survives: a strictly increasing arrangement is impossible
		if len(dp) == 0 {
			return -1
		}
	}

	best := int(^uint(0) >> 1)
	for _, ops := range dp {
		if ops < best {
			best = ops
		}
	}
	return best
}
