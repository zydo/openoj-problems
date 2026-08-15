import "container/heap"

type item struct {
	d int64
	u int
}

type pq []item

func (p pq) Len() int            { return len(p) }
func (p pq) Less(i, j int) bool  { return p[i].d < p[j].d }
func (p pq) Swap(i, j int)       { p[i], p[j] = p[j], p[i] }
func (p *pq) Push(x interface{}) { *p = append(*p, x.(item)) }
func (p *pq) Pop() interface{} {
	old := *p
	n := len(old)
	it := old[n-1]
	*p = old[:n-1]
	return it
}

func dijkstra(n int, adj [][]item, src int) []int64 {
	const INF = int64(1) << 62
	dist := make([]int64, n)
	for i := range dist {
		dist[i] = INF
	}
	dist[src] = 0
	h := &pq{{0, src}}
	heap.Init(h)
	for h.Len() > 0 {
		top := heap.Pop(h).(item)
		d, u := top.d, top.u
		if d > dist[u] {
			continue
		}
		for _, e := range adj[u] {
			nd := d + e.d
			if nd < dist[e.u] {
				dist[e.u] = nd
				heap.Push(h, item{nd, e.u})
			}
		}
	}
	return dist
}

func minimumWeight(n int, edges [][]int, src1 int, src2 int, dest int) int64 {
	adj := make([][]item, n)
	radj := make([][]item, n)
	for _, e := range edges {
		u, v, w := e[0], e[1], e[2]
		adj[u] = append(adj[u], item{int64(w), v})
		radj[v] = append(radj[v], item{int64(w), u})
	}
	d1 := dijkstra(n, adj, src1)
	d2 := dijkstra(n, adj, src2)
	dd := dijkstra(n, radj, dest)
	const INF = int64(1) << 62
	best := INF
	for v := 0; v < n; v++ {
		if dd[v] < INF && d1[v] < INF && d2[v] < INF {
			total := d1[v] + d2[v] + dd[v]
			if total < best {
				best = total
			}
		}
	}
	if best == INF {
		return -1
	}
	return best
}
