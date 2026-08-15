func largestArea(heights []int) int {
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

func maximalRectangle(matrix [][]string) int {
	if len(matrix) == 0 || len(matrix[0]) == 0 {
		return 0
	}
	rows, cols := len(matrix), len(matrix[0])
	heights := make([]int, cols)
	best := 0
	for r := 0; r < rows; r++ {
		for c := 0; c < cols; c++ {
			if matrix[r][c] == "1" {
				heights[c]++
			} else {
				heights[c] = 0
			}
		}
		if area := largestArea(heights); area > best {
			best = area
		}
	}
	return best
}
