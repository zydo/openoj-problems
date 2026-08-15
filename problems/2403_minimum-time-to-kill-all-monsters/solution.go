import "math/bits"

func minimumTime(power []int) int64 {
	n := len(power)
	full := (1 << n) - 1
	const INF = int64(1) << 60
	dp := make([]int64, full+1)
	for i := range dp {
		dp[i] = INF
	}
	dp[0] = 0
	for mask := 0; mask <= full; mask++ {
		if dp[mask] >= INF {
			continue
		}
		gain := int64(bits.OnesCount(uint(mask)) + 1)
		for j := 0; j < n; j++ {
			if mask&(1<<j) == 0 {
				days := (int64(power[j]) + gain - 1) / gain
				nxt := mask | (1 << j)
				if dp[mask]+days < dp[nxt] {
					dp[nxt] = dp[mask] + days
				}
			}
		}
	}
	return dp[full]
}
