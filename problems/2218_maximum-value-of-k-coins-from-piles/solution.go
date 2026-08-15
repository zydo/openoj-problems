func maxValueOfCoins(piles [][]int, k int) int {
	dp := make([]int, k+1)
	for _, pile := range piles {
		prefix := make([]int, len(pile)+1)
		for i, coin := range pile {
			prefix[i+1] = prefix[i] + coin
		}
		takeMax := len(pile)
		if takeMax > k {
			takeMax = k
		}
		ndp := make([]int, k+1)
		for j := 0; j <= k; j++ {
			value := dp[j]
			lim := takeMax
			if lim > j {
				lim = j
			}
			for t := 1; t <= lim; t++ {
				cand := dp[j-t] + prefix[t]
				if cand > value {
					value = cand
				}
			}
			ndp[j] = value
		}
		dp = ndp
	}
	return dp[k]
}
