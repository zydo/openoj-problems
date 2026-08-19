func rankedPrimeFraction(values []int, rank int) []int {
	n := len(values)
	lo, hi := 0.0, 1.0
	ans := []int{values[0], values[n-1]}
	// Binary search on the fraction value; count fractions <= mid.
	for it := 0; it < 50; it++ {
		mid := (lo + hi) / 2.0
		count := 0
		best := 0.0
		bestPair := []int{values[0], values[n-1]}
		j := 1
		for i := 0; i < n-1; i++ {
			for j < n && float64(values[i]) > mid*float64(values[j]) {
				j++
			}
			count += n - j
			if j < n {
				val := float64(values[i]) / float64(values[j])
				if val > best {
					best = val
					bestPair = []int{values[i], values[j]}
				}
			}
		}
		if count >= rank {
			hi = mid
			ans = bestPair
		} else {
			lo = mid
		}
	}
	return ans
}
