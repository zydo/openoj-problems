func minCostClimbingStairs(cost []int) int {
	prev2, prev1 := 0, 0
	for _, c := range cost {
		cur := c + min(prev1, prev2)
		prev2, prev1 = prev1, cur
	}
	return min(prev1, prev2)
}
