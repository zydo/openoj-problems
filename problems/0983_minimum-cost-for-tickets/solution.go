func mincostTickets(days []int, costs []int) int {
	durations := []int{1, 7, 30}
	last := days[len(days)-1]
	travel := make([]bool, last+1)
	for _, d := range days {
		travel[d] = true
	}
	dp := make([]int, last+31)
	for day := 1; day <= last; day++ {
		if !travel[day] {
			dp[day] = dp[day-1]
		} else {
			best := 1 << 30
			for i, dur := range durations {
				prev := day - dur
				if prev < 0 {
					prev = 0
				}
				if c := dp[prev] + costs[i]; c < best {
					best = c
				}
			}
			dp[day] = best
		}
	}
	return dp[last]
}
