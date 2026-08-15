func findCheapestPrice(n int, flights [][]int, src int, dst int, k int) int {
	const INF = 1 << 30
	dist := make([]int, n)
	for i := range dist {
		dist[i] = INF
	}
	dist[src] = 0
	for i := 0; i < k+1; i++ {
		ndist := make([]int, n)
		copy(ndist, dist)
		changed := false
		for _, flight := range flights {
			f, t, price := flight[0], flight[1], flight[2]
			if dist[f]+price < ndist[t] {
				ndist[t] = dist[f] + price
				changed = true
			}
		}
		dist = ndist
		if !changed {
			break
		}
	}
	if dist[dst] >= INF {
		return -1
	}
	return dist[dst]
}
