func shortestPathLength(graph [][]int) int {
	n := len(graph)
	full := (1 << n) - 1
	dist := make([][]int, n)
	for i := range dist {
		dist[i] = make([]int, 1<<n)
		for j := range dist[i] {
			dist[i][j] = -1
		}
	}
	type state struct{ node, mask int }
	queue := make([]state, 0, n*(1<<n))
	for i := 0; i < n; i++ {
		dist[i][1<<i] = 0
		queue = append(queue, state{i, 1 << i})
	}
	for head := 0; head < len(queue); head++ {
		cur := queue[head]
		if cur.mask == full {
			return dist[cur.node][cur.mask]
		}
		for _, nxt := range graph[cur.node] {
			nmask := cur.mask | (1 << nxt)
			if dist[nxt][nmask] == -1 {
				dist[nxt][nmask] = dist[cur.node][cur.mask] + 1
				queue = append(queue, state{nxt, nmask})
			}
		}
	}
	return 0
}
