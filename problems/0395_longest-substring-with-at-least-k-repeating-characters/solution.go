func longestSubstring(s string, k int) int {
	var longest func(lo, hi int) int
	longest = func(lo, hi int) int {
		if lo >= hi {
			return 0
		}
		var counts [128]int
		for i := lo; i < hi; i++ {
			counts[s[i]]++
		}
		allFrequent := true
		for c := 0; c < 128; c++ {
			if counts[c] > 0 && counts[c] < k {
				allFrequent = false
				break
			}
		}
		if allFrequent {
			return hi - lo
		}
		best := 0
		start := lo
		for i := lo; i < hi; i++ {
			if counts[s[i]] < k {
				if l := longest(start, i); l > best {
					best = l
				}
				start = i + 1
			}
		}
		if l := longest(start, hi); l > best {
			best = l
		}
		return best
	}
	return longest(0, len(s))
}
