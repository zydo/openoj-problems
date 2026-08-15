import "container/heap"

type swimNode struct {
	t, r, c int
}

type swimHeap []swimNode

func (h swimHeap) Len() int            { return len(h) }
func (h swimHeap) Less(i, j int) bool  { return h[i].t < h[j].t }
func (h swimHeap) Swap(i, j int)       { h[i], h[j] = h[j], h[i] }
func (h *swimHeap) Push(x interface{}) { *h = append(*h, x.(swimNode)) }
func (h *swimHeap) Pop() interface{} {
	old := *h
	n := len(old)
	x := old[n-1]
	*h = old[:n-1]
	return x
}

func swimInWater(grid [][]int) int {
	n := len(grid)
	dist := make([][]int, n)
	for i := range dist {
		dist[i] = make([]int, n)
		for j := range dist[i] {
			dist[i][j] = 1 << 30
		}
	}
	dist[0][0] = grid[0][0]
	h := &swimHeap{{grid[0][0], 0, 0}}
	heap.Init(h)
	dirs := [4][2]int{{1, 0}, {-1, 0}, {0, 1}, {0, -1}}
	for h.Len() > 0 {
		cur := heap.Pop(h).(swimNode)
		if cur.r == n-1 && cur.c == n-1 {
			return cur.t
		}
		if cur.t > dist[cur.r][cur.c] {
			continue
		}
		for _, d := range dirs {
			nr, nc := cur.r+d[0], cur.c+d[1]
			if nr >= 0 && nr < n && nc >= 0 && nc < n {
				nt := cur.t
				if grid[nr][nc] > nt {
					nt = grid[nr][nc]
				}
				if nt < dist[nr][nc] {
					dist[nr][nc] = nt
					heap.Push(h, swimNode{nt, nr, nc})
				}
			}
		}
	}
	return dist[n-1][n-1]
}
