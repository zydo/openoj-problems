func isRobotBounded(instructions string) bool {
	x, y := 0, 0
	dx, dy := 0, 1 // north
	for i := 0; i < len(instructions); i++ {
		switch instructions[i] {
		case 'G':
			x += dx
			y += dy
		case 'L':
			dx, dy = -dy, dx
		default: // 'R'
			dx, dy = dy, -dx
		}
	}
	return (x == 0 && y == 0) || !(dx == 0 && dy == 1)
}
