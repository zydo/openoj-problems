func sumScores(s string) int64 {
	n := len(s)
	if n == 0 {
		return 0
	}
	z := make([]int64, n)
	z[0] = int64(n)
	left, right := 0, 0
	for i := 1; i < n; i++ {
		if i < right {
			zi := int64(right - i)
			if z[i-left] < zi {
				zi = z[i-left]
			}
			z[i] = zi
		}
		for i+int(z[i]) < n && s[z[i]] == s[i+int(z[i])] {
			z[i]++
		}
		if i+int(z[i]) > right {
			left = i
			right = i + int(z[i])
		}
	}
	var total int64
	for _, v := range z {
		total += v
	}
	return total
}
