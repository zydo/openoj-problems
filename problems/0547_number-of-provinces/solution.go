func findCircleNum(isConnected [][]int) int {
	n := len(isConnected)
	visited := make([]bool, n)
	provinces := 0
	stack := make([]int, 0, n)
	for start := 0; start < n; start++ {
		if visited[start] {
			continue
		}
		provinces++
		visited[start] = true
		stack = append(stack, start)
		for len(stack) > 0 {
			city := stack[len(stack)-1]
			stack = stack[:len(stack)-1]
			for other := 0; other < n; other++ {
				if isConnected[city][other] == 1 && !visited[other] {
					visited[other] = true
					stack = append(stack, other)
				}
			}
		}
	}
	return provinces
}
