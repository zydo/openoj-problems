func allPathsSourceTarget(graph [][]int) [][]int {
	n := len(graph)
	target := n - 1
	paths := [][]int{}
	path := []int{0}

	var dfs func(node int)
	dfs = func(node int) {
		if node == target {
			done := make([]int, len(path))
			copy(done, path)
			paths = append(paths, done)
			return
		}
		for _, nxt := range graph[node] {
			path = append(path, nxt)
			dfs(nxt)
			path = path[:len(path)-1]
		}
	}

	dfs(0)
	return paths
}
