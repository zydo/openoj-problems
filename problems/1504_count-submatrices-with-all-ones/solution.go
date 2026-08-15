func numSubmat(mat [][]int) int {
	m := len(mat)
	n := 0
	if m > 0 {
		n = len(mat[0])
	}
	total := 0
	height := make([]int, n)
	for r := 0; r < m; r++ {
		for c := 0; c < n; c++ {
			if mat[r][c] == 1 {
				height[c]++
			} else {
				height[c] = 0
			}
		}
		for left := 0; left < n; left++ {
			minH := height[left]
			for right := left; right < n; right++ {
				if height[right] < minH {
					minH = height[right]
				}
				total += minH
			}
		}
	}
	return total
}
