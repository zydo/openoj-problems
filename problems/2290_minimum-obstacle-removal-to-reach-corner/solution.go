import "container/list"

func minimumObstacles(grid [][]int) int {
	m := len(grid)
	n := len(grid[0])
	INF := int(^uint(0) >> 1)
	dist := make([][]int, m)
	for i := range dist {
		dist[i] = make([]int, n)
		for j := range dist[i] {
			dist[i][j] = INF
		}
	}
	dist[0][0] = 0
	dq := list.New()
	dq.PushBack([2]int{0, 0})
	di := [4]int{0, 0, 1, -1}
	dj := [4]int{1, -1, 0, 0}
	for dq.Len() > 0 {
		front := dq.Remove(dq.Front()).([2]int)
		i, j := front[0], front[1]
		d := dist[i][j]
		for k := 0; k < 4; k++ {
			ni, nj := i+di[k], j+dj[k]
			if ni >= 0 && ni < m && nj >= 0 && nj < n {
				nd := d + grid[ni][nj]
				if nd < dist[ni][nj] {
					dist[ni][nj] = nd
					if grid[ni][nj] == 0 {
						dq.PushFront([2]int{ni, nj})
					} else {
						dq.PushBack([2]int{ni, nj})
					}
				}
			}
		}
	}
	return dist[m-1][n-1]
}
