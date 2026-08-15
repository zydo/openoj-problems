func asteroidCollision(asteroids []int) []int {
	stack := make([]int, 0, len(asteroids))
	for _, asteroid := range asteroids {
		alive := true
		for alive && len(stack) > 0 && asteroid < 0 && stack[len(stack)-1] > 0 {
			top := stack[len(stack)-1]
			if top < -asteroid {
				stack = stack[:len(stack)-1]
			} else if top == -asteroid {
				stack = stack[:len(stack)-1]
				alive = false
			} else {
				alive = false
			}
		}
		if alive {
			stack = append(stack, asteroid)
		}
	}
	return stack
}
