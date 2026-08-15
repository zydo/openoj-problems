func findOrder(numCourses int, prerequisites [][]int) []int {
	adjacency := make([][]int, numCourses)
	indegree := make([]int, numCourses)
	for _, pair := range prerequisites {
		course, prereq := pair[0], pair[1]
		adjacency[prereq] = append(adjacency[prereq], course)
		indegree[course]++
	}
	queue := make([]int, 0, numCourses)
	for i := 0; i < numCourses; i++ {
		if indegree[i] == 0 {
			queue = append(queue, i)
		}
	}
	order := make([]int, 0, numCourses)
	for head := 0; head < len(queue); head++ {
		node := queue[head]
		order = append(order, node)
		for _, nxt := range adjacency[node] {
			indegree[nxt]--
			if indegree[nxt] == 0 {
				queue = append(queue, nxt)
			}
		}
	}
	if len(order) == numCourses {
		return order
	}
	return []int{}
}
