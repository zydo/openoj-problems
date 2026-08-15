func canFinish(numCourses int, prerequisites [][]int) bool {
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
	taken := 0
	for head := 0; head < len(queue); head++ {
		node := queue[head]
		taken++
		for _, nxt := range adjacency[node] {
			indegree[nxt]--
			if indegree[nxt] == 0 {
				queue = append(queue, nxt)
			}
		}
	}
	return taken == numCourses
}
