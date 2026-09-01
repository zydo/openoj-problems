import (
	"container/heap"
)

type freeHeap [][]int64

func (h freeHeap) Len() int { return len(h) }
func (h freeHeap) Less(i, j int) bool {
	if h[i][0] != h[j][0] {
		return h[i][0] < h[j][0]
	}
	return h[i][1] < h[j][1]
}
func (h freeHeap) Swap(i, j int)       { h[i], h[j] = h[j], h[i] }
func (h *freeHeap) Push(x interface{}) { *h = append(*h, x.([]int64)) }
func (h *freeHeap) Pop() interface{} {
	old := *h
	n := len(old)
	item := old[n-1]
	*h = old[:n-1]
	return item
}

type busyHeap [][3]int64

func (h busyHeap) Len() int            { return len(h) }
func (h busyHeap) Less(i, j int) bool  { return h[i][0] < h[j][0] }
func (h busyHeap) Swap(i, j int)       { h[i], h[j] = h[j], h[i] }
func (h *busyHeap) Push(x interface{}) { *h = append(*h, x.([3]int64)) }
func (h *busyHeap) Pop() interface{} {
	old := *h
	n := len(old)
	item := old[n-1]
	*h = old[:n-1]
	return item
}

func dispatchJobs(machines []int, jobs []int) []int64 {
	// free is ordered (weight, index); busy is ordered by release time.
	// Drain finished machines, wait for the earliest if needed, then hand
	// the task to the smallest free server.
	m := len(jobs)
	fh := &freeHeap{}
	for i, w := range machines {
		*fh = append(*fh, []int64{int64(w), int64(i)})
	}
	heap.Init(fh)
	bh := &busyHeap{}
	ans := make([]int64, 0, m)
	cur := int64(0)
	for j := 0; j < m; j++ {
		if int64(j) > cur {
			cur = int64(j)
		}
		for bh.Len() > 0 && (*bh)[0][0] <= cur {
			top := heap.Pop(bh).([3]int64)
			heap.Push(fh, []int64{top[1], top[2]})
		}
		if fh.Len() == 0 {
			cur = (*bh)[0][0]
			for bh.Len() > 0 && (*bh)[0][0] <= cur {
				top := heap.Pop(bh).([3]int64)
				heap.Push(fh, []int64{top[1], top[2]})
			}
		}
		pick := heap.Pop(fh).([]int64)
		heap.Push(bh, [3]int64{cur + int64(jobs[j]), pick[0], pick[1]})
		ans = append(ans, pick[1])
	}
	return ans
}
