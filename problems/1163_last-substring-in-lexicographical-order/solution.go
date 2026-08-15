func lastSubstring(s string) string {
	n := len(s)
	i, j, k := 0, 1, 0
	for j+k < n {
		if s[i+k] == s[j+k] {
			k++
		} else if s[i+k] < s[j+k] {
			i2 := i + k + 1
			if j > i2 {
				i2 = j
			}
			i = i2
			j = i + 1
			k = 0
		} else {
			j = j + k + 1
			k = 0
		}
	}
	return s[i:]
}
