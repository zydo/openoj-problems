// Work upward from the bottom: row[j] is the cheapest path sum from column j
// of the row being folded down to the bottom, so a single array of n entries
// is all the state the scan ever needs.
func cheapestPath(rows [][]int) int {
	row := append([]int(nil), rows[len(rows)-1]...)
	for i := len(rows) - 2; i >= 0; i-- {
		for j := 0; j <= i; j++ {
			// From (i, j) the two allowed steps land on (i + 1, j) and
			// (i + 1, j + 1); both sums are final before the overwrite
			// retires row[j].
			row[j] = rows[i][j] + min(row[j], row[j+1])
		}
	}
	return row[0]
}
