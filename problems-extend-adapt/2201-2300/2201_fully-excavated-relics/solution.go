// Mark every excavated cell once in a boolean grid, then each rectangle test
// is a constant-time lookup per cell — digs is never rescanned.
func excavatedRelics(n int, relics [][]int, digs [][]int) int {
	dug := make([][]bool, n)
	for r := range dug {
		dug[r] = make([]bool, n)
	}
	for _, cell := range digs {
		dug[cell[0]][cell[1]] = true
	}
	extracted := 0
	for _, rect := range relics {
		complete := true
		for r := rect[0]; r <= rect[2] && complete; r++ {
			for c := rect[1]; c <= rect[3]; c++ {
				if !dug[r][c] {
					complete = false
					break
				}
			}
		}
		if complete {
			extracted++
		}
	}
	return extracted
}
