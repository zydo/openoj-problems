func possibleBipartition(n int, dislikes [][]int) bool {
	adjacency := make([][]int, n+1)
	for _, d := range dislikes {
		a, b := d[0], d[1]
		adjacency[a] = append(adjacency[a], b)
		adjacency[b] = append(adjacency[b], a)
	}

	color := make([]int, n+1) // 0 = uncolored, 1 / -1 = the two groups
	queue := make([]int, 0, n)
	for start := 1; start <= n; start++ {
		if color[start] != 0 {
			continue
		}
		color[start] = 1
		queue = queue[:0]
		queue = append(queue, start)
		for len(queue) > 0 {
			person := queue[0]
			queue = queue[1:]
			for _, neighbor := range adjacency[person] {
				if color[neighbor] == 0 {
					color[neighbor] = -color[person]
					queue = append(queue, neighbor)
				} else if color[neighbor] == color[person] {
					return false
				}
			}
		}
	}
	return true
}
