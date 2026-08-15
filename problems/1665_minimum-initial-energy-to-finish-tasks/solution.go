import "sort"

func minimumEffort(tasks [][]int) int64 {
	sorted := make([][]int, len(tasks))
	copy(sorted, tasks)
	sort.Slice(sorted, func(a, b int) bool {
		return sorted[b][1]-sorted[b][0] < sorted[a][1]-sorted[a][0]
	})
	spent := int64(0)
	answer := int64(0)
	for _, task := range sorted {
		if spent+int64(task[1]) > answer {
			answer = spent + int64(task[1])
		}
		spent += int64(task[0])
	}
	return answer
}
