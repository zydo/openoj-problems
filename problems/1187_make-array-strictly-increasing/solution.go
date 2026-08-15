import "sort"

func makeArrayIncreasing(arr1 []int, arr2 []int) int {
	b := append([]int(nil), arr2...)
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

	dp := map[int]int{arr1[0]: 0}
	for _, v := range b {
		if v < arr1[0] {
			dp[v] = 1
		}
	}

	for i := 1; i < len(arr1); i++ {
		ndp := make(map[int]int)
		for last, ops := range dp {
			if arr1[i] > last {
				if cur, ok := ndp[arr1[i]]; !ok || cur > ops {
					ndp[arr1[i]] = ops
				}
			}
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
