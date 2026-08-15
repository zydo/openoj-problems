import "container/heap"

type minHeap2599 []int64

func (h minHeap2599) Len() int            { return len(h) }
func (h minHeap2599) Less(i, j int) bool  { return h[i] < h[j] }
func (h minHeap2599) Swap(i, j int)       { h[i], h[j] = h[j], h[i] }
func (h *minHeap2599) Push(x interface{}) { *h = append(*h, x.(int64)) }
func (h *minHeap2599) Pop() interface{} {
	old := *h
	n := len(old)
	x := old[n-1]
	*h = old[:n-1]
	return x
}

func makePrefSumNonNegative(nums []int) int {
	h := &minHeap2599{}
	heap.Init(h)
	prefix := int64(0)
	ops := 0
	for _, num := range nums {
		prefix += int64(num)
		heap.Push(h, int64(num))
		for prefix < 0 {
			prefix -= heap.Pop(h).(int64)
			ops++
		}
	}
	return ops
}
