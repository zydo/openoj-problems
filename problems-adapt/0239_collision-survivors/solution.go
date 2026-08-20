func collisionSurvivors(movers []int) []int {
	// The stack holds survivors — internally stable, all collisions resolved.
	stack := make([]int, 0, len(movers))
	for _, mover := range movers {
		alive := true
		// A newcomer can only fight the top, and only when it moves left
		// against a right-moving survivor; other pairs never meet.
		for alive && len(stack) > 0 && mover < 0 && stack[len(stack)-1] > 0 {
			top := stack[len(stack)-1]
			if top < -mover {
				// Top explodes; the newcomer continues against the new top.
				stack = stack[:len(stack)-1]
			} else if top == -mover {
				// Equal sizes: both explode.
				stack = stack[:len(stack)-1]
				alive = false
			} else {
				// Top is larger: the newcomer explodes.
				alive = false
			}
		}
		if alive {
			stack = append(stack, mover)
		}
	}
	return stack
}
