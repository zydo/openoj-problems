func treeDiameter(edges [][]int) int {
	if len(edges) == 0 {
		return 0
	}
	n := len(edges) + 1
	adj := make([][]int, n)
	for _, e := range edges {
		adj[e[0]] = append(adj[e[0]], e[1])
		adj[e[1]] = append(adj[e[1]], e[0])
	}

	bfs := func(src int) (int, int) {
		dist := make([]int, n)
		for i := range dist {
			dist[i] = -1
		}
		dist[src] = 0
		queue := []int{src}
		far := src
		for head := 0; head < len(queue); head++ {
			u := queue[head]
			for _, v := range adj[u] {
				if dist[v] < 0 {
					dist[v] = dist[u] + 1
					queue = append(queue, v)
					if dist[v] > dist[far] {
						far = v
					}
				}
			}
		}
		return far, dist[far]
	}

	far, _ := bfs(0)
	_, diameter := bfs(far)
	return diameter
}
