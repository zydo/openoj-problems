import "strings"

func solveNQueens(n int) [][]string {
	results := [][]string{}
	cols := map[int]bool{}
	diag1 := map[int]bool{}
	diag2 := map[int]bool{}
	board := []string{}

	var backtrack func(row int)
	backtrack = func(row int) {
		if row == n {
			sol := make([]string, len(board))
			copy(sol, board)
			results = append(results, sol)
			return
		}
		for col := 0; col < n; col++ {
			if cols[col] || diag1[row-col] || diag2[row+col] {
				continue
			}
			cols[col] = true
			diag1[row-col] = true
			diag2[row+col] = true
			rowStr := strings.Repeat(".", col) + "Q" + strings.Repeat(".", n-col-1)
			board = append(board, rowStr)
			backtrack(row + 1)
			board = board[:len(board)-1]
			delete(cols, col)
			delete(diag1, row-col)
			delete(diag2, row+col)
		}
	}

	backtrack(0)
	return results
}
