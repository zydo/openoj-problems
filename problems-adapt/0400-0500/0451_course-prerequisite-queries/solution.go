func coursePrerequisiteQueries(courseCount int, prerequisites [][]int, queries [][]int) []bool {
	adjacency := make([][]int, courseCount)
	indegree := make([]int, courseCount)
	for _, pair := range prerequisites {
		a, b := pair[0], pair[1]
		adjacency[a] = append(adjacency[a], b)
		indegree[b]++
	}
	words := (courseCount + 63) / 64
	// reach[v] is a bitset of the courses that reach course v
	reach := make([][]uint64, courseCount)
	for v := range reach {
		reach[v] = make([]uint64, words)
	}
	queue := make([]int, 0, courseCount)
	for i := 0; i < courseCount; i++ {
		if indegree[i] == 0 {
			queue = append(queue, i)
		}
	}
	for head := 0; head < len(queue); head++ {
		u := queue[head]
		for _, v := range adjacency[u] {
			reach[v][u>>6] |= 1 << (u & 63)
			for w := 0; w < words; w++ {
				reach[v][w] |= reach[u][w]
			}
			indegree[v]--
			if indegree[v] == 0 {
				queue = append(queue, v)
			}
		}
	}
	answer := make([]bool, len(queries))
	for j, query := range queries {
		u, v := query[0], query[1]
		answer[j] = reach[v][u>>6]&(1<<(u&63)) != 0
	}
	return answer
}
