func openLock(deadends []string, target string) int {
	dead := map[string]bool{}
	for _, d := range deadends {
		dead[d] = true
	}
	start := "0000"
	if dead[start] {
		return -1
	}
	seen := map[string]bool{start: true}
	queue := []string{start}
	steps := 0
	for len(queue) > 0 {
		next := make([]string, 0, len(queue)*8)
		for _, state := range queue {
			if state == target {
				return steps
			}
			for i := 0; i < 4; i++ {
				for _, delta := range []int{1, -1} {
					digit := (int(state[i]-'0') + delta + 10) % 10
					nxt := state[:i] + string(rune('0'+digit)) + state[i+1:]
					if !seen[nxt] && !dead[nxt] {
						seen[nxt] = true
						next = append(next, nxt)
					}
				}
			}
		}
		queue = next
		steps++
	}
	return -1
}
