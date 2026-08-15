func getCollisionTimes(cars [][]int) []float64 {
	n := len(cars)
	answer := make([]float64, n)
	for i := range answer {
		answer[i] = -1
	}
	stack := make([]int, 0, n)
	for i := n - 1; i >= 0; i-- {
		position, speed := cars[i][0], cars[i][1]
		for len(stack) > 0 && speed <= cars[stack[len(stack)-1]][1] {
			stack = stack[:len(stack)-1]
		}
		for len(stack) > 0 {
			j := stack[len(stack)-1]
			t := float64(cars[j][0]-position) / float64(speed-cars[j][1])
			if answer[j] > 0 && t >= answer[j] {
				stack = stack[:len(stack)-1]
			} else {
				answer[i] = t
				break
			}
		}
		stack = append(stack, i)
	}
	return answer
}
