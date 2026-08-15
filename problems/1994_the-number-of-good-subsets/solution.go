func numberOfGoodSubsets(nums []int) int {
	const MOD = 1000000007
	primes := [10]int{2, 3, 5, 7, 11, 13, 17, 19, 23, 29}

	count := map[int]int{}
	for _, v := range nums {
		count[v]++
	}

	size := 1 << 10
	dp := make([]int64, size)
	dp[0] = 1
	for value, freq := range count {
		if value == 1 {
			continue
		}
		mask := 0
		bad := false
		x := value
		for i, p := range primes {
			if x%p == 0 {
				mask |= 1 << i
				x /= p
				if x%p == 0 {
					bad = true
					break
				}
			}
		}
		if bad || mask == 0 {
			continue
		}
		for prev := size - 1; prev >= 0; prev-- {
			if dp[prev] != 0 && prev&mask == 0 {
				dp[prev|mask] = (dp[prev|mask] + dp[prev]*int64(freq)) % MOD
			}
		}
	}
	var total int64
	for i := 1; i < size; i++ {
		total = (total + dp[i]) % MOD
	}
	ones := count[1]
	pow := int64(1)
	for i := 0; i < ones; i++ {
		pow = pow * 2 % MOD
	}
	return int(total * pow % MOD)
}
