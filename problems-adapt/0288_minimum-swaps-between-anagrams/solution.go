func minimumAnagramSwaps(startText string, targetText string) int {
	type item struct {
		s     string
		steps int
	}
	// Each swap is a move between strings, so BFS from startText yields
	// the minimum swap count.
	queue := []item{{startText, 0}}
	seen := map[string]bool{startText: true}
	for head := 0; head < len(queue); head++ {
		cur := queue[head]
		s := cur.s
		if s == targetText {
			return cur.steps
		}
		b := []byte(s)
		// Always fix the leftmost mismatch first: some optimal
		// solution does, and the rule prunes the branching.
		i := 0
		for b[i] == targetText[i] {
			i++
		}
		for j := i + 1; j < len(s); j++ {
			// Install targetText's letter at i, and never break an
			// already-matching j — such a swap is never minimal.
			if s[j] == targetText[i] && s[j] != targetText[j] {
				b[i], b[j] = b[j], b[i]
				ns := string(b)
				b[i], b[j] = b[j], b[i]
				// Only novel strings join the queue; matched
				// positions are never touched again.
				if !seen[ns] {
					seen[ns] = true
					queue = append(queue, item{ns, cur.steps + 1})
				}
			}
		}
	}
	// Unreachable: anagrams are always convertible.
	return -1
}
