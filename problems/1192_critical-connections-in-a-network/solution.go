import "sort"

func criticalConnections(n int, connections [][]int) [][]int {
	graph := make([][]int, n)
	for _, e := range connections {
		graph[e[0]] = append(graph[e[0]], e[1])
		graph[e[1]] = append(graph[e[1]], e[0])
	}

	disc := make([]int, n)
	low := make([]int, n)
	for i := range disc {
		disc[i] = -1
	}
	timer := 0
	bridges := [][]int{}

	var dfs func(u, parent int)
	dfs = func(u, parent int) {
		disc[u] = timer
		low[u] = timer
		timer++
		for _, v := range graph[u] {
			if disc[v] == -1 {
				dfs(v, u)
				if low[v] < low[u] {
					low[u] = low[v]
				}
				if low[v] > disc[u] {
					a, b := u, v
					if a > b {
						a, b = b, a
					}
					bridges = append(bridges, []int{a, b})
				}
			} else if v != parent {
				if disc[v] < low[u] {
					low[u] = disc[v]
				}
			}
		}
	}

	dfs(0, -1)
	sort.Slice(bridges, func(i, j int) bool {
		if bridges[i][0] != bridges[j][0] {
			return bridges[i][0] < bridges[j][0]
		}
		return bridges[i][1] < bridges[j][1]
	})
	return bridges
}
