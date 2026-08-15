import "sort"

func largestSubmatrix(matrix [][]int) int {
	m := len(matrix)
	if m == 0 {
		return 0
	}
	n := len(matrix[0])
	heights := make([]int, n)
	best := 0
	for _, row := range matrix {
		for j := 0; j < n; j++ {
			if row[j] == 1 {
				heights[j]++
			} else {
				heights[j] = 0
			}
		}
		ordered := make([]int, n)
		copy(ordered, heights)
		sort.Ints(ordered)
		for i := 0; i < n; i++ {
			h := ordered[n-1-i]
			if h == 0 {
				break
			}
			area := h * (i + 1)
			if area > best {
				best = area
			}
		}
	}
	return best
}
