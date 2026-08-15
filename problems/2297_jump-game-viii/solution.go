func minCost(nums []int, costs []int) int64 {
	n := len(nums)
	nextGe := make([]int, n)
	nextSm := make([]int, n)
	for i := range nextGe {
		nextGe[i] = -1
		nextSm[i] = -1
	}
	stack := make([]int, 0, n)
	for i := 0; i < n; i++ {
		for len(stack) > 0 && nums[i] >= nums[stack[len(stack)-1]] {
			nextGe[stack[len(stack)-1]] = i
			stack = stack[:len(stack)-1]
		}
		stack = append(stack, i)
	}
	stack = stack[:0]
	for i := 0; i < n; i++ {
		for len(stack) > 0 && nums[i] < nums[stack[len(stack)-1]] {
			nextSm[stack[len(stack)-1]] = i
			stack = stack[:len(stack)-1]
		}
		stack = append(stack, i)
	}
	const inf = int64(1) << 60
	dp := make([]int64, n)
	for i := range dp {
		dp[i] = inf
	}
	dp[0] = 0
	for i := 0; i+1 < n; i++ {
		for _, j := range []int{nextGe[i], nextSm[i]} {
			if j != -1 && dp[i]+int64(costs[j]) < dp[j] {
				dp[j] = dp[i] + int64(costs[j])
			}
		}
	}
	return dp[n-1]
}
