import "container/heap"

type stopHeap [][3]int

func (h stopHeap) Len() int            { return len(h) }
func (h stopHeap) Less(i, j int) bool  { return h[i][0] < h[j][0] }
func (h stopHeap) Swap(i, j int)       { h[i], h[j] = h[j], h[i] }
func (h *stopHeap) Push(x interface{}) { *h = append(*h, x.([3]int)) }
func (h *stopHeap) Pop() interface{} {
	old := *h
	nodeCount := len(old)
	item := old[nodeCount-1]
	*h = old[:nodeCount-1]
	return item
}

func minimumLimitedRouteCost(nodeCount int, links [][]int, source int, target int, maxIntermediates int) int {
	graph := make([][][2]int, nodeCount)
	for _, link := range links {
		graph[link[0]] = append(graph[link[0]], [2]int{link[1], link[2]})
	}
	const inf = int(^uint(0) >> 1)
	// State = (cost, node, links taken). Carrying the count in the state
	// is what enforces the limit: a state that already used its maxIntermediates+1 links
	// is never allowed to board another.
	h := &stopHeap{}
	heap.Push(h, [3]int{0, source, 0})
	best := make([]int, nodeCount)
	for i := range best {
		best[i] = inf
	}
	for h.Len() > 0 {
		top := heap.Pop(h).([3]int)
		cost, node, edges := top[0], top[1], top[2]
		// The heap pops in cost order, so the first target pop is final.
		if node == target {
			return cost
		}
		// Dominance prune: a cheaper state that used no more links was
		// already expanded here, so this one cannot lead anywhere new.
		if edges > best[node] {
			continue
		}
		best[node] = edges
		if edges < maxIntermediates+1 {
			for _, e := range graph[node] {
				heap.Push(h, [3]int{cost + e[1], e[0], edges + 1})
			}
		}
	}
	return -1
}
