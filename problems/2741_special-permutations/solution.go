func specialPerm(nums []int) int {
	const MOD = 1000000007
	n := len(nums)
	size := 1 << n
	dp := make([][]int, size)
	for i := range dp {
		dp[i] = make([]int, n)
	}
	for i := 0; i < n; i++ {
		dp[1<<i][i] = 1
	}
	for mask := 0; mask < size; mask++ {
		for last := 0; last < n; last++ {
			if (mask>>last)&1 == 0 {
				continue
			}
			ways := dp[mask][last]
			if ways == 0 {
				continue
			}
			for nxt := 0; nxt < n; nxt++ {
				if (mask>>nxt)&1 == 1 {
					continue
				}
				if nums[last]%nums[nxt] == 0 || nums[nxt]%nums[last] == 0 {
					t := dp[mask|(1<<nxt)]
					t[nxt] = (t[nxt] + ways) % MOD
				}
			}
		}
	}
	total := 0
	for i := 0; i < n; i++ {
		total = (total + dp[size-1][i]) % MOD
	}
	return total
}
