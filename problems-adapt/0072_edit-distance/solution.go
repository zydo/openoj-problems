func minDistance(source string, target string) int {
	// dp[i][j] = min operations turning the first i chars of source into
	// the first j chars of target. Only the last two table rows are kept,
	// since row i reads only row i-1 and its own left neighbor.
	m, n := len(source), len(target)
	prev := make([]int, n+1)
	curr := make([]int, n+1)
	// Row 0: converting the empty prefix costs j insertions.
	for j := 0; j <= n; j++ {
		prev[j] = j
	}
	for i := 1; i <= m; i++ {
		// Column 0: converting an i-char prefix to empty costs i deletions.
		curr[0] = i
		for j := 1; j <= n; j++ {
			if source[i-1] == target[j-1] {
				// Last chars align for free: inherit the diagonal.
				curr[j] = prev[j-1]
			} else {
				// One paid operation must fix the mismatch; each choice
				// covers a distinct final move, so the min is exact.
				// Replace inherits prev[j-1], delete drops source[i-1]
				// and inherits prev[j], insert appends target[j-1] and
				// inherits curr[j-1] (one fewer char of target to match).
				curr[j] = 1 + min(prev[j-1], min(prev[j], curr[j-1]))
			}
		}
		// Roll the rows: curr becomes the new prev.
		prev, curr = curr, prev
	}
	return prev[n]
}
