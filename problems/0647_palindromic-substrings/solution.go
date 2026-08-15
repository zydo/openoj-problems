func countSubstrings(s string) int {
	n := len(s)
	count := 0
	expand := func(left, right int) int {
		c := 0
		for left >= 0 && right < n && s[left] == s[right] {
			c++
			left--
			right++
		}
		return c
	}
	for center := 0; center < n; center++ {
		count += expand(center, center)
		count += expand(center, center+1)
	}
	return count
}
