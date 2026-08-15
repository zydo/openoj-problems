func searchMatrix(matrix [][]int, target int) bool {
	if len(matrix) == 0 || len(matrix[0]) == 0 {
		return false
	}
	row, col := 0, len(matrix[0])-1
	for row < len(matrix) && col >= 0 {
		value := matrix[row][col]
		if value == target {
			return true
		}
		if value > target {
			col--
		} else {
			row++
		}
	}
	return false
}
