import "sort"

func minCost(n int, cuts []int) int {
	positions := make([]int, 0, len(cuts)+2)
	positions = append(positions, cuts...)
	positions = append(positions, 0, n)
	sort.Ints(positions)
	size := len(positions)
	dp := make([][]int, size)
	for i := range dp {
		dp[i] = make([]int, size)
	}
	for length := 2; length < size; length++ {
		for i := 0; i+length < size; i++ {
			j := i + length
			best := int(^uint(0) >> 1) // MaxInt
			for k := i + 1; k < j; k++ {
				if dp[i][k]+dp[k][j] < best {
					best = dp[i][k] + dp[k][j]
				}
			}
			dp[i][j] = best + (positions[j] - positions[i])
		}
	}
	return dp[0][size-1]
}
