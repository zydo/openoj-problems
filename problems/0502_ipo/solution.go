import (
	"container/heap"
	"sort"
)

type ipoHeap []int

func (h ipoHeap) Len() int            { return len(h) }
func (h ipoHeap) Less(i, j int) bool  { return h[i] > h[j] }
func (h ipoHeap) Swap(i, j int)       { h[i], h[j] = h[j], h[i] }
func (h *ipoHeap) Push(x interface{}) { *h = append(*h, x.(int)) }
func (h *ipoHeap) Pop() interface{} {
	old := *h
	n := len(old)
	x := old[n-1]
	*h = old[:n-1]
	return x
}

func findMaximizedCapital(k int, w int, profits []int, capital []int) int {
	type project struct{ c, p int }
	n := len(profits)
	projects := make([]project, n)
	for i := 0; i < n; i++ {
		projects[i] = project{capital[i], profits[i]}
	}
	sort.Slice(projects, func(i, j int) bool {
		if projects[i].c != projects[j].c {
			return projects[i].c < projects[j].c
		}
		return projects[i].p < projects[j].p
	})
	affordable := &ipoHeap{}
	index := 0
	current := w
	limit := k
	if limit > n {
		limit = n
	}
	for iter := 0; iter < limit; iter++ {
		for index < n && projects[index].c <= current {
			heap.Push(affordable, projects[index].p)
			index++
		}
		if affordable.Len() == 0 {
			break
		}
		current += heap.Pop(affordable).(int)
	}
	return current
}
