func minimumLimitedRouteCost(nodeCount int, links [][]int, source int, target int, maxIntermediates int) int {
	const INF = 1 << 30
	// After r full rounds, dist[v] is the cheapest cost using at
	// most r edges; maxIntermediates internal nodes allow maxIntermediates+1 links, so run maxIntermediates+1 rounds.
	dist := make([]int, nodeCount)
	for i := range dist {
		dist[i] = INF
	}
	dist[source] = 0
	for i := 0; i < maxIntermediates+1; i++ {
		// Relax from a frozen copy: writing in place would chain
		// several edges inside one round and exceed the stop limit.
		ndist := make([]int, nodeCount)
		copy(ndist, dist)
		changed := false
		for _, link := range links {
			f, t, weight := link[0], link[1], link[2]
			if dist[f]+weight < ndist[t] {
				ndist[t] = dist[f] + weight
				changed = true
			}
		}
		dist = ndist
		// A round that changed nothing never improves later rounds.
		if !changed {
			break
		}
	}
	// A surviving infinity means the destination is unreachable
	// within the allowance.
	if dist[target] >= INF {
		return -1
	}
	return dist[target]
}
