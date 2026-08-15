func longestRepeatingSubstring(s string) int {
	n := len(s)

	hasRepeat := func(length int) bool {
		if length == 0 {
			return true
		}
		seen := make(map[string]bool)
		for i := 0; i+length <= n; i++ {
			piece := s[i : i+length]
			if seen[piece] {
				return true
			}
			seen[piece] = true
		}
		return false
	}

	lo, hi := 0, n-1
	for lo < hi {
		mid := lo + (hi-lo+1)/2
		if hasRepeat(mid) {
			lo = mid
		} else {
			hi = mid - 1
		}
	}
	return lo
}
