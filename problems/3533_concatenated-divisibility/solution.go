import "sort"

func concatenatedDivisibility(nums []int, k int) []int {
	n := len(nums)
	lens := make([]int, n)
	for i, x := range nums {
		for x > 0 {
			lens[i]++
			x /= 10
		}
	}
	pow10 := make([]int, 8)
	pow10[0] = 1
	for i := 1; i < 8; i++ {
		pow10[i] = pow10[i-1] * 10
	}

	full := (1 << n) - 1
	dp := make([][]bool, 1<<n)
	for mask := range dp {
		dp[mask] = make([]bool, k)
	}
	dp[full][0] = true
	for mask := full - 1; mask >= 0; mask-- {
		for rem := 0; rem < k; rem++ {
			for i := 0; i < n; i++ {
				if (mask>>i)&1 == 0 {
					nrem := (rem*pow10[lens[i]] + nums[i]) % k
					if dp[mask|(1<<i)][nrem] {
						dp[mask][rem] = true
						break
					}
				}
			}
		}
	}

	res := []int{}
	if !dp[0][0] {
		return res
	}

	order := make([]int, n)
	for i := range order {
		order[i] = i
	}
	sort.SliceStable(order, func(a, b int) bool { return nums[order[a]] < nums[order[b]] })

	mask := 0
	rem := 0
	for step := 0; step < n; step++ {
		for _, i := range order {
			if (mask>>i)&1 == 0 {
				nrem := (rem*pow10[lens[i]] + nums[i]) % k
				if dp[mask|(1<<i)][nrem] {
					res = append(res, nums[i])
					mask |= 1 << i
					rem = nrem
					break
				}
			}
		}
	}
	return res
}
