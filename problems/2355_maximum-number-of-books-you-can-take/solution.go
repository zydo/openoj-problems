func maximumBooks(books []int) int64 {
	n := len(books)
	dp := make([]int64, n)
	stack := make([]int, 0, n)
	var best int64
	for i := 0; i < n; i++ {
		bi := int64(books[i])
		for len(stack) > 0 && int64(books[stack[len(stack)-1]]) >= bi-int64(i-stack[len(stack)-1]) {
			stack = stack[:len(stack)-1]
		}
		j := -1
		if len(stack) > 0 {
			j = stack[len(stack)-1]
		}
		var length int64
		if j >= 0 {
			length = int64(i - j)
		} else {
			length = min(int64(i), bi) + 1 // stop where the sequence would go negative
		}
		s := length*bi - length*(length-1)/2
		if j >= 0 {
			dp[i] = s + dp[j]
		} else {
			dp[i] = s
		}
		if dp[i] > best {
			best = dp[i]
		}
		stack = append(stack, i)
	}
	return best
}
