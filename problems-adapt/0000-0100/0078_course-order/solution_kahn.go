func courseOrder(courseCount int, prerequisites [][]int) []int {
	// A valid order is exactly a topological ordering of the graph where
	// each pair [course, prereq] is the edge prereq -> course.
	adjacency := make([][]int, courseCount)
	indegree := make([]int, courseCount)
	for _, pair := range prerequisites {
		course, prereq := pair[0], pair[1]
		adjacency[prereq] = append(adjacency[prereq], course)
		indegree[course]++
	}
	// Kahn's algorithm: start from every course with no prerequisites.
	queue := make([]int, 0, courseCount)
	for i := 0; i < courseCount; i++ {
		if indegree[i] == 0 {
			queue = append(queue, i)
		}
	}
	order := make([]int, 0, courseCount)
	for head := 0; head < len(queue); head++ {
		node := queue[head]
		order = append(order, node)
		// Emitting a course consumes its edges: dependents lose one
		// prerequisite, and any that reaches zero becomes available.
		for _, nxt := range adjacency[node] {
			indegree[nxt]--
			if indegree[nxt] == 0 {
				queue = append(queue, nxt)
			}
		}
	}
	// A shortfall means a cycle kept positive indegrees forever; the problem
	// requires an empty list rather than a partial order.
	if len(order) == courseCount {
		return order
	}
	return []int{}
}
