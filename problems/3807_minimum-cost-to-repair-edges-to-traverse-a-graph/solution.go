func minCost(n int, edges [][]int, k int) int {
	type edge struct{ v, w int }
	adj := make([][]edge, n)
	maxW := 0
	for _, e := range edges {
		u, v, w := e[0], e[1], e[2]
		adj[u] = append(adj[u], edge{v, w})
		adj[v] = append(adj[v], edge{u, w})
		if w > maxW {
			maxW = w
		}
	}

	dist := make([]int, n)
	queue := make([]int, 0, n)
	var can func(money int) bool
	can = func(money int) bool {
		for i := range dist {
			dist[i] = -1
		}
		dist[0] = 0
		queue = queue[:0]
		queue = append(queue, 0)
		for head := 0; head < len(queue); head++ {
			u := queue[head]
			if dist[u] >= k {
				continue
			}
			for _, e := range adj[u] {
				if e.w <= money && dist[e.v] == -1 {
					dist[e.v] = dist[u] + 1
					queue = append(queue, e.v)
				}
			}
		}
		return dist[n-1] != -1 && dist[n-1] <= k
	}

	if !can(maxW) {
		return -1
	}
	lo, hi := 0, maxW
	for lo < hi {
		mid := lo + (hi-lo)/2
		if can(mid) {
			hi = mid
		} else {
			lo = mid + 1
		}
	}
	return lo
}
