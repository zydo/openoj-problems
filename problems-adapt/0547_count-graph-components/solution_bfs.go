func countComponents(adjacency [][]int) int {
	n := len(adjacency)
	visited := make([]bool, n)
	components := 0
	for start := 0; start < n; start++ {
		if visited[start] {
			continue
		}
		// An unvisited city during the sweep starts a new component;
		// this one traversal absorbs exactly one component.
		components++
		visited[start] = true
		queue := []int{start}
		// The FIFO queue spreads through the component in waves, expanding
		// every city at hop distance d before any at d + 1, yet only
		// visitation, not the order, decides the count.
		for head := 0; head < len(queue); head++ {
			city := queue[head]
			for other := 0; other < n; other++ {
				if adjacency[city][other] == 1 && !visited[other] {
					// Mark at enqueue time so no city enters the queue twice;
					// each city is dequeued once and its adjacency row scanned
					// once.
					visited[other] = true
					queue = append(queue, other)
				}
			}
		}
	}
	return components
}
