func minimumMoves(arr []int) int {
	n := len(arr)
	if n == 0 {
		return 0
	}

	dp := make([][]int, n)
	for i := range dp {
		dp[i] = make([]int, n)
	}
	for i := 0; i < n; i++ {
		dp[i][i] = 1
	}
	for i := 0; i+1 < n; i++ {
		if arr[i] == arr[i+1] {
			dp[i][i+1] = 1
		} else {
			dp[i][i+1] = 2
		}
	}

	for length := 3; length <= n; length++ {
		for i := 0; i+length <= n; i++ {
			j := i + length - 1
			best := 1 + dp[i+1][j]
			for k := i; k < j; k++ {
				candidate := dp[i][k] + dp[k+1][j]
				if candidate < best {
					best = candidate
				}
			}
			if arr[i] == arr[j] && dp[i+1][j-1] < best {
				best = dp[i+1][j-1]
			}
			dp[i][j] = best
		}
	}
	return dp[0][n-1]
}
