func largestPathValue(colors string, edges [][]int) int {
	n := len(colors)
	graph := make([][]int, n)
	indeg := make([]int, n)
	for _, e := range edges {
		graph[e[0]] = append(graph[e[0]], e[1])
		indeg[e[1]]++
	}

	dp := make([][26]int, n)

	queue := make([]int, 0, n)
	for i := 0; i < n; i++ {
		if indeg[i] == 0 {
			queue = append(queue, i)
		}
	}
	head, visited, ans := 0, 0, 0
	for head < len(queue) {
		u := queue[head]
		head++
		visited++
		dp[u][colors[u]-'a']++
		for c := 0; c < 26; c++ {
			if dp[u][c] > ans {
				ans = dp[u][c]
			}
		}
		for _, v := range graph[u] {
			for c := 0; c < 26; c++ {
				if dp[u][c] > dp[v][c] {
					dp[v][c] = dp[u][c]
				}
			}
			indeg[v]--
			if indeg[v] == 0 {
				queue = append(queue, v)
			}
		}
	}
	if visited != n {
		return -1
	}
	return ans
}
