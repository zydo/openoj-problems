func kConcatenationMaxSum(arr []int, k int) int {
	const MOD = 1000000007

	total := 0
	for _, value := range arr {
		total += value
	}

	kadane := func(copies int) int {
		best := 0
		current := 0
		for c := 0; c < copies; c++ {
			for _, value := range arr {
				current += value
				if current < 0 {
					current = 0
				}
				if current > best {
					best = current
				}
			}
		}
		return best
	}

	maxPrefix := func() int {
		best := 0
		current := 0
		for _, value := range arr {
			current += value
			if current > best {
				best = current
			}
		}
		return best
	}

	maxSuffix := func() int {
		best := 0
		current := 0
		for i := len(arr) - 1; i >= 0; i-- {
			current += arr[i]
			if current > best {
				best = current
			}
		}
		return best
	}

	if k == 1 {
		return kadane(1) % MOD
	}
	best := kadane(2)
	if k > 2 && total > 0 {
		candidate := maxSuffix() + maxPrefix() + (k-2)*total
		if candidate > best {
			best = candidate
		}
	}
	return best % MOD
}
