import "sort"

func countProductTrees(values []int) int {
	const MOD = 1000000007
	sort.Ints(values)
	index := make(map[int]int)
	for i, v := range values {
		index[v] = i
	}
	dp := make([]int64, len(values)) // dp[i] = trees rooted at values[i]
	for i := range dp {
		dp[i] = 1
	}
	for i := 0; i < len(values); i++ {
		v := values[i]
		total := int64(1)
		for j := 0; j < i; j++ {
			if v%values[j] == 0 {
				if other, ok := index[v/values[j]]; ok {
					total += dp[j] * dp[other]
				}
			}
		}
		dp[i] = total % MOD
	}
	sum := int64(0)
	for _, value := range dp {
		sum += value
	}
	return int(sum % MOD)
}
