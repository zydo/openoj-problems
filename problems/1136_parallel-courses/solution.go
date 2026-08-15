func minimumSemesters(n int, relations [][]int) int {
	adjacency := make([][]int, n+1)
	for i := range adjacency {
		adjacency[i] = []int{}
	}
	indegree := make([]int, n+1)
	for _, relation := range relations {
		adjacency[relation[0]] = append(adjacency[relation[0]], relation[1])
		indegree[relation[1]]++
	}
	queue := make([]int, 0, n)
	for i := 1; i <= n; i++ {
		if indegree[i] == 0 {
			queue = append(queue, i)
		}
	}
	semesters := 0
	taken := 0
	// Level-by-level BFS using index ranges.
	for start := 0; start < len(queue); {
		semesters++
		end := len(queue)
		for _, course := range queue[start:end] {
			taken++
			for _, nxt := range adjacency[course] {
				indegree[nxt]--
				if indegree[nxt] == 0 {
					queue = append(queue, nxt)
				}
			}
		}
		start = end
	}
	if taken == n {
		return semesters
	}
	return -1
}
