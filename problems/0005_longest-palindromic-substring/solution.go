func longestPalindrome(s string) string {
	n := len(s)
	expand := func(left, right int) (int, int) {
		for left >= 0 && right < n && s[left] == s[right] {
			left--
			right++
		}
		return left + 1, right - 1
	}
	bestStart, bestEnd := 0, 0
	for i := 0; i < n; i++ {
		centers := [2][2]int{{0, 0}, {0, 0}}
		l, r := expand(i, i)
		centers[0] = [2]int{l, r}
		l, r = expand(i, i+1)
		centers[1] = [2]int{l, r}
		for _, c := range centers {
			if c[1]-c[0] > bestEnd-bestStart {
				bestStart, bestEnd = c[0], c[1]
			}
		}
	}
	return s[bestStart : bestEnd+1]
}
