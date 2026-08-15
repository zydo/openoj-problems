import "container/heap"

type edgeItem struct {
	v, w int
}

type pqItem struct {
	d int64
	u int
}

type distHeap []pqItem

func (h distHeap) Len() int            { return len(h) }
func (h distHeap) Less(i, j int) bool  { return h[i].d < h[j].d }
func (h distHeap) Swap(i, j int)       { h[i], h[j] = h[j], h[i] }
func (h *distHeap) Push(x interface{}) { *h = append(*h, x.(pqItem)) }
func (h *distHeap) Pop() interface{} {
	old := *h
	n := len(old)
	item := old[n-1]
	*h = old[:n-1]
	return item
}

func reachableNodes(edges [][]int, maxMoves int, n int) int {
	adj := make([][]edgeItem, n)
	for _, e := range edges {
		u, v, cnt := e[0], e[1], e[2]
		adj[u] = append(adj[u], edgeItem{v, cnt + 1})
		adj[v] = append(adj[v], edgeItem{u, cnt + 1})
	}
	const INF = int64(1) << 62
	dist := make([]int64, n)
	for i := range dist {
		dist[i] = INF
	}
	dist[0] = 0
	h := &distHeap{}
	heap.Init(h)
	heap.Push(h, pqItem{0, 0})
	for h.Len() > 0 {
		top := heap.Pop(h).(pqItem)
		if top.d != dist[top.u] {
			continue
		}
		for _, nb := range adj[top.u] {
			nd := top.d + int64(nb.w)
			if nd < dist[nb.v] {
				dist[nb.v] = nd
				heap.Push(h, pqItem{nd, nb.v})
			}
		}
	}
	result := int64(0)
	for _, d := range dist {
		if d <= int64(maxMoves) {
			result++
		}
	}
	for _, e := range edges {
		u, v, cnt := e[0], e[1], e[2]
		a := int64(0)
		if b := int64(maxMoves) - dist[u]; b > 0 {
			a = b
		}
		b := int64(0)
		if t := int64(maxMoves) - dist[v]; t > 0 {
			b = t
		}
		if a+b < int64(cnt) {
			result += a + b
		} else {
			result += int64(cnt)
		}
	}
	return int(result)
}
