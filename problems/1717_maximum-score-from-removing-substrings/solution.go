func maximumGain(s string, x int, y int) int {
	removePairs := func(text string, first, second byte, points int) (string, int) {
		stack := make([]byte, 0, len(text))
		score := 0
		for i := 0; i < len(text); i++ {
			c := text[i]
			if len(stack) > 0 && stack[len(stack)-1] == first && c == second {
				stack = stack[:len(stack)-1]
				score += points
			} else {
				stack = append(stack, c)
			}
		}
		return string(stack), score
	}
	if x >= y {
		rest, score1 := removePairs(s, 'a', 'b', x)
		_, score2 := removePairs(rest, 'b', 'a', y)
		return score1 + score2
	}
	rest, score1 := removePairs(s, 'b', 'a', y)
	_, score2 := removePairs(rest, 'a', 'b', x)
	return score1 + score2
}
