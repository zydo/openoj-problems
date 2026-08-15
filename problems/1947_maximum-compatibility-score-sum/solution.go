func maxCompatibilitySum(students [][]int, mentors [][]int) int {
	m := len(students)
	score := make([][]int, m)
	for i := 0; i < m; i++ {
		score[i] = make([]int, m)
		for j := 0; j < m; j++ {
			s := 0
			for t := 0; t < len(students[i]); t++ {
				if students[i][t] == mentors[j][t] {
					s++
				}
			}
			score[i][j] = s
		}
	}
	full := 1 << m
	dp := make([]int, full)
	popcount := make([]int, full)
	for mask := 1; mask < full; mask++ {
		popcount[mask] = popcount[mask&(mask-1)] + 1
		i := popcount[mask] - 1
		best := 0
		for j := 0; j < m; j++ {
			if mask>>j&1 == 1 {
				v := dp[mask^(1<<j)] + score[i][j]
				if v > best {
					best = v
				}
			}
		}
		dp[mask] = best
	}
	return dp[full-1]
}
