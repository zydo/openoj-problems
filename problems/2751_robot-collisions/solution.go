import "sort"

func survivedRobotsHealths(positions []int, healths []int, directions string) []int {
	h := make([]int, len(healths))
	copy(h, healths)
	n := len(positions)
	order := make([]int, n)
	for i := range order {
		order[i] = i
	}
	sort.Slice(order, func(a, b int) bool {
		return positions[order[a]] < positions[order[b]]
	})
	stack := []int{}
	for _, idx := range order {
		if directions[idx] == 'R' {
			stack = append(stack, idx)
		} else {
			alive := true
			for len(stack) > 0 && directions[stack[len(stack)-1]] == 'R' {
				top := stack[len(stack)-1]
				if h[top] < h[idx] {
					h[idx]--
					stack = stack[:len(stack)-1]
				} else if h[top] > h[idx] {
					h[top]--
					alive = false
					break
				} else {
					stack = stack[:len(stack)-1]
					alive = false
					break
				}
			}
			if alive {
				stack = append(stack, idx)
			}
		}
	}
	survivor := make([]bool, n)
	for _, idx := range stack {
		survivor[idx] = true
	}
	result := []int{}
	for i := 0; i < n; i++ {
		if survivor[i] {
			result = append(result, h[i])
		}
	}
	return result
}
