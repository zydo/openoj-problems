func solveSudoku(board [][]string) [][]string {
	rows := make([]int, 9)
	cols := make([]int, 9)
	boxes := make([]int, 9)
	type cell struct{ r, c int }
	empties := make([]cell, 0, 81)
	for r := 0; r < 9; r++ {
		for c := 0; c < 9; c++ {
			ch := board[r][c]
			if ch == "." {
				empties = append(empties, cell{r, c})
			} else {
				bit := 1 << int(ch[0]-'0')
				rows[r] |= bit
				cols[c] |= bit
				boxes[(r/3)*3+c/3] |= bit
			}
		}
	}

	var backtrack func(k int) bool
	backtrack = func(k int) bool {
		if k == len(empties) {
			return true
		}
		r, c := empties[k].r, empties[k].c
		b := (r/3)*3 + c/3
		for d := 1; d <= 9; d++ {
			bit := 1 << d
			if rows[r]&bit != 0 || cols[c]&bit != 0 || boxes[b]&bit != 0 {
				continue
			}
			rows[r] |= bit
			cols[c] |= bit
			boxes[b] |= bit
			board[r][c] = string(rune('0' + d))
			if backtrack(k + 1) {
				return true
			}
			rows[r] ^= bit
			cols[c] ^= bit
			boxes[b] ^= bit
			board[r][c] = "."
		}
		return false
	}

	backtrack(0)
	return board
}
