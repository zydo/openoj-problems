func maximumRemovals(s string, p string, removable []int) int {
	stillSubsequence := func(k int) bool {
		removed := make([]bool, len(s))
		for i := 0; i < k; i++ {
			removed[removable[i]] = true
		}
		pi := 0
		for i := 0; i < len(s) && pi < len(p); i++ {
			if !removed[i] && s[i] == p[pi] {
				pi++
			}
		}
		return pi == len(p)
	}

	lo, hi := 0, len(removable)
	for lo < hi {
		mid := (lo + hi + 1) / 2
		if stillSubsequence(mid) {
			lo = mid
		} else {
			hi = mid - 1
		}
	}
	return lo
}
