func findKthNumber(m int, n int, k int) int {
	countAtMost := func(x int) bool {
		total := 0
		for i := 1; i <= m; i++ {
			total += min(x/i, n)
			if total >= k {
				return true
			}
		}
		return total >= k
	}
	lo, hi := 1, m*n
	for lo < hi {
		mid := lo + (hi-lo)/2
		if countAtMost(mid) {
			hi = mid
		} else {
			lo = mid + 1
		}
	}
	return lo
}
