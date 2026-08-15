import "container/heap"

func trapRainWater(heightMap [][]int) int {
	m, n := len(heightMap), len(heightMap[0])
	visited := make([][]bool, m)
	for i := range visited {
		visited[i] = make([]bool, n)
	}
	h := &cellHeap{}
	for i := 0; i < m; i++ {
		for j := 0; j < n; j++ {
			if i == 0 || i == m-1 || j == 0 || j == n-1 {
				heap.Push(h, cell{heightMap[i][j], i, j})
				visited[i][j] = true
			}
		}
	}
	water := 0
	dirs := [4][2]int{{-1, 0}, {1, 0}, {0, -1}, {0, 1}}
	for h.Len() > 0 {
		top := heap.Pop(h).(cell)
		for _, d := range dirs {
			ni, nj := top.i+d[0], top.j+d[1]
			if ni >= 0 && ni < m && nj >= 0 && nj < n && !visited[ni][nj] {
				visited[ni][nj] = true
				nh := heightMap[ni][nj]
				if nh < top.h {
					water += top.h - nh
				}
				level := top.h
				if nh > level {
					level = nh
				}
				heap.Push(h, cell{level, ni, nj})
			}
		}
	}
	return water
}

type cell struct {
	h, i, j int
}

type cellHeap []cell

func (c cellHeap) Len() int            { return len(c) }
func (c cellHeap) Less(a, b int) bool  { return c[a].h < c[b].h }
func (c cellHeap) Swap(a, b int)       { c[a], c[b] = c[b], c[a] }
func (c *cellHeap) Push(x interface{}) { *c = append(*c, x.(cell)) }
func (c *cellHeap) Pop() interface{} {
	old := *c
	n := len(old)
	top := old[n-1]
	*c = old[:n-1]
	return top
}
