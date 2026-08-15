func calculateMinimumHP(dungeon [][]int) int {
	m := len(dungeon)
	n := len(dungeon[0])
	const INF = 1 << 30
	need := make([][]int, m+1)
	for i := range need {
		need[i] = make([]int, n+1)
		for j := range need[i] {
			need[i][j] = INF
		}
	}
	need[m][n-1] = 1
	for i := m - 1; i >= 0; i-- {
		for j := n - 1; j >= 0; j-- {
			bestNext := need[i+1][j]
			if need[i][j+1] < bestNext {
				bestNext = need[i][j+1]
			}
			v := bestNext - dungeon[i][j]
			if v < 1 {
				v = 1
			}
			need[i][j] = v
		}
	}
	return need[0][0]
}
