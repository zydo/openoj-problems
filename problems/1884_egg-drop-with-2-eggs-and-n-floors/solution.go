func twoEggDrop(n int) int {
	cover, moves := 0, 0
	for cover < n {
		moves++
		cover += moves
	}
	return moves
}
