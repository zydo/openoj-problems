func networkDelayTime(times [][]int, n int, k int) int {
	// O(n^2) Dijkstra with an adjacency matrix (n <= 100 on this problem).
	inf := 1 << 30
	adj := make([][]int, n+1)
	for i := range adj {
		adj[i] = make([]int, n+1)
		for j := range adj[i] {
			adj[i][j] = inf
		}
		adj[i][i] = 0
	}
	for _, t := range times {
		// Keep the smallest weight when parallel edges repeat a pair.
		if t[2] < adj[t[0]][t[1]] {
			adj[t[0]][t[1]] = t[2]
		}
	}

	dist := make([]int, n+1)
	done := make([]bool, n+1)
	for i := 1; i <= n; i++ {
		dist[i] = inf
	}
	dist[k] = 0

	for {
		// Pick the nearest unsettled node by linear scan (heap-free Dijkstra).
		u := -1
		for i := 1; i <= n; i++ {
			if !done[i] && dist[i] < inf && (u == -1 || dist[i] < dist[u]) {
				u = i
			}
		}
		if u == -1 {
			break
		}
		// Non-negative weights make this settle final: dist[u] never improves again.
		done[u] = true
		for v := 1; v <= n; v++ {
			if adj[u][v] < inf && dist[u]+adj[u][v] < dist[v] {
				dist[v] = dist[u] + adj[u][v]
			}
		}
	}

	// Any unsettled node is unreachable from k; otherwise the last node to
	// hear the signal sets the answer.
	best := -1
	for i := 1; i <= n; i++ {
		if !done[i] {
			return -1
		}
		if dist[i] > best {
			best = dist[i]
		}
	}
	return best
}
