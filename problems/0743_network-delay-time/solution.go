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
		u := -1
		for i := 1; i <= n; i++ {
			if !done[i] && dist[i] < inf && (u == -1 || dist[i] < dist[u]) {
				u = i
			}
		}
		if u == -1 {
			break
		}
		done[u] = true
		for v := 1; v <= n; v++ {
			if adj[u][v] < inf && dist[u]+adj[u][v] < dist[v] {
				dist[v] = dist[u] + adj[u][v]
			}
		}
	}

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
