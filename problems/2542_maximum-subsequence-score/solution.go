import "container/heap"
import "sort"

type minHeap []int64

func (h minHeap) Len() int            { return len(h) }
func (h minHeap) Less(i, j int) bool  { return h[i] < h[j] }
func (h minHeap) Swap(i, j int)       { h[i], h[j] = h[j], h[i] }
func (h *minHeap) Push(x interface{}) { *h = append(*h, x.(int64)) }
func (h *minHeap) Pop() interface{} {
	old := *h
	n := len(old)
	x := old[n-1]
	*h = old[:n-1]
	return x
}

func maxScore(nums1 []int, nums2 []int, k int) int64 {
	n := len(nums1)
	idx := make([]int, n)
	for i := range idx {
		idx[i] = i
	}
	sort.SliceStable(idx, func(a, b int) bool { return nums2[idx[a]] > nums2[idx[b]] })
	h := &minHeap{}
	heap.Init(h)
	var total, best int64
	for _, j := range idx {
		a := int64(nums1[j])
		heap.Push(h, a)
		total += a
		if h.Len() > k {
			total -= heap.Pop(h).(int64)
		}
		if h.Len() == k {
			b := total * int64(nums2[j])
			if b > best {
				best = b
			}
		}
	}
	return best
}
