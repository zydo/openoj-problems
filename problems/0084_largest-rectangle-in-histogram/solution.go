func largestRectangleArea(heights []int) int {
	n := len(heights)
	stack := make([]int, 0, n+1)
	best := 0
	for i := 0; i <= n; i++ {
		h := 0
		if i < n {
			h = heights[i]
		}
		for len(stack) > 0 && heights[stack[len(stack)-1]] > h {
			height := heights[stack[len(stack)-1]]
			stack = stack[:len(stack)-1]
			left := -1
			if len(stack) > 0 {
				left = stack[len(stack)-1]
			}
			if area := height * (i - left - 1); area > best {
				best = area
			}
		}
		stack = append(stack, i)
	}
	return best
}
