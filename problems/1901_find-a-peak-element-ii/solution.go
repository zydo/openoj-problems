func findPeakGrid(mat [][]int) []int {
	m, n := len(mat), len(mat[0])
	lo, hi := 0, m-1
	for lo <= hi {
		mid := (lo + hi) / 2
		row := mat[mid]
		j := 0
		for c := 1; c < n; c++ {
			if row[c] > row[j] {
				j = c
			}
		}
		up := -1
		if mid > 0 {
			up = mat[mid-1][j]
		}
		down := -1
		if mid < m-1 {
			down = mat[mid+1][j]
		}
		if row[j] > up && row[j] > down {
			return []int{mid, j}
		}
		if up > row[j] {
			hi = mid - 1
		} else {
			lo = mid + 1
		}
	}
	return []int{}
}
