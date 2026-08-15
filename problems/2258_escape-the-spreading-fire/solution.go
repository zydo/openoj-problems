func maximumMinutes(grid [][]int) int {
	m := len(grid)
	n := len(grid[0])
	const INF = 1073741823 // 2^30 - 1, above every reachable time (including 1e9 waits)
	di := [4]int{1, -1, 0, 0}
	dj := [4]int{0, 0, 1, -1}
	targetI := m - 1
	targetJ := n - 1

	fire := make([][]int, m)
	for i := 0; i < m; i++ {
		fire[i] = make([]int, n)
		for j := 0; j < n; j++ {
			fire[i][j] = INF
		}
	}
	type cell struct{ i, j int }
	queue := make([]cell, 0)
	for i := 0; i < m; i++ {
		for j := 0; j < n; j++ {
			if grid[i][j] == 1 {
				fire[i][j] = 0
				queue = append(queue, cell{i, j})
			}
		}
	}
	for head := 0; head < len(queue); head++ {
		i, j := queue[head].i, queue[head].j
		for d := 0; d < 4; d++ {
			ni := i + di[d]
			nj := j + dj[d]
			if ni >= 0 && ni < m && nj >= 0 && nj < n && grid[ni][nj] != 2 && fire[ni][nj] == INF {
				fire[ni][nj] = fire[i][j] + 1
				queue = append(queue, cell{ni, nj})
			}
		}
	}

	canReach := func(wait int) bool {
		if wait >= fire[0][0] {
			return false
		}
		seen := make([][]bool, m)
		for i := 0; i < m; i++ {
			seen[i] = make([]bool, n)
		}
		seen[0][0] = true
		type state struct{ i, j, t int }
		dq := make([]state, 0)
		dq = append(dq, state{0, 0, wait})
		for head := 0; head < len(dq); head++ {
			i, j, t := dq[head].i, dq[head].j, dq[head].t
			if i == targetI && j == targetJ {
				return true
			}
			for d := 0; d < 4; d++ {
				ni := i + di[d]
				nj := j + dj[d]
				if ni >= 0 && ni < m && nj >= 0 && nj < n && grid[ni][nj] != 2 && !seen[ni][nj] {
					nt := t + 1
					if ni == targetI && nj == targetJ {
						if nt <= fire[ni][nj] {
							seen[ni][nj] = true
							dq = append(dq, state{ni, nj, nt})
						}
					} else {
						if nt < fire[ni][nj] {
							seen[ni][nj] = true
							dq = append(dq, state{ni, nj, nt})
						}
					}
				}
			}
		}
		return false
	}

	if !canReach(0) {
		return -1
	}
	if canReach(1000000000) {
		return 1000000000
	}

	lo, hi := 0, 1000000000
	for lo < hi {
		mid := lo + (hi-lo+1)/2
		if canReach(mid) {
			lo = mid
		} else {
			hi = mid - 1
		}
	}
	return lo
}
