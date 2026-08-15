func longestSubsequence(arr []int, difference int) int {
	dp := make(map[int]int)
	best := 0
	for _, x := range arr {
		len := dp[x-difference] + 1
		dp[x] = len
		if len > best {
			best = len
		}
	}
	return best
}
