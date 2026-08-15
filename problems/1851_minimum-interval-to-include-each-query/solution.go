import (
	"container/heap"
	"sort"
)

// intervalHeap is a min-heap of [size, right] pairs ordered by size.
type intervalHeap [][2]int

func (h intervalHeap) Len() int            { return len(h) }
func (h intervalHeap) Less(i, j int) bool  { return h[i][0] < h[j][0] }
func (h intervalHeap) Swap(i, j int)       { h[i], h[j] = h[j], h[i] }
func (h *intervalHeap) Push(x interface{}) { *h = append(*h, x.([2]int)) }
func (h *intervalHeap) Pop() interface{} {
	old := *h
	n := len(old)
	x := old[n-1]
	*h = old[:n-1]
	return x
}

func minInterval(intervals [][]int, queries []int) []int {
	sorted := make([][]int, len(intervals))
	copy(sorted, intervals)
	sort.Slice(sorted, func(a, b int) bool {
		if sorted[a][0] != sorted[b][0] {
			return sorted[a][0] < sorted[b][0]
		}
		return sorted[a][1] < sorted[b][1]
	})
	order := make([]int, len(queries))
	for j := range order {
		order[j] = j
	}
	sort.Slice(order, func(a, b int) bool {
		return queries[order[a]] < queries[order[b]]
	})
	h := &intervalHeap{}
	answers := make([]int, len(queries))
	i := 0
	n := len(sorted)
	for _, j := range order {
		q := queries[j]
		for i < n && sorted[i][0] <= q {
			heap.Push(h, [2]int{sorted[i][1] - sorted[i][0] + 1, sorted[i][1]})
			i++
		}
		for h.Len() > 0 && (*h)[0][1] < q {
			heap.Pop(h)
		}
		if h.Len() > 0 {
			answers[j] = (*h)[0][0]
		} else {
			answers[j] = -1
		}
	}
	return answers
}
