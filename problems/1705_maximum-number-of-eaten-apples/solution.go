import "container/heap"

type appleEntry struct {
	rotDay int
	count  int
}

type appleHeap []appleEntry

func (h appleHeap) Len() int { return len(h) }
func (h appleHeap) Less(i, j int) bool {
	if h[i].rotDay != h[j].rotDay {
		return h[i].rotDay < h[j].rotDay
	}
	return h[i].count < h[j].count
}
func (h appleHeap) Swap(i, j int) { h[i], h[j] = h[j], h[i] }
func (h *appleHeap) Push(x interface{}) {
	*h = append(*h, x.(appleEntry))
}
func (h *appleHeap) Pop() interface{} {
	old := *h
	n := len(old)
	x := old[n-1]
	*h = old[:n-1]
	return x
}

func eatenApples(apples []int, days []int) int {
	n := len(apples)
	h := &appleHeap{}
	eaten := 0
	for i := 0; i < n; i++ {
		if apples[i] > 0 {
			heap.Push(h, appleEntry{i + days[i], apples[i]})
		}
		for h.Len() > 0 && (*h)[0].rotDay <= i {
			heap.Pop(h)
		}
		if h.Len() > 0 {
			item := heap.Pop(h).(appleEntry)
			eaten++
			if item.count > 1 {
				heap.Push(h, appleEntry{item.rotDay, item.count - 1})
			}
		}
	}
	day := n
	for h.Len() > 0 {
		for h.Len() > 0 && (*h)[0].rotDay <= day {
			heap.Pop(h)
		}
		if h.Len() == 0 {
			break
		}
		item := heap.Pop(h).(appleEntry)
		eaten++
		if item.count > 1 {
			heap.Push(h, appleEntry{item.rotDay, item.count - 1})
		}
		day++
	}
	return eaten
}
