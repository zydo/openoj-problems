func findNumOfValidWords(words []string, puzzles []string) []int {
	counts := make(map[int]int)
	for _, w := range words {
		m := 0
		for t := 0; t < len(w); t++ {
			m |= 1 << (w[t] - 'a')
		}
		counts[m]++
	}

	answer := []int{}
	for _, puzzle := range puzzles {
		first := 1 << (puzzle[0] - 'a')
		puzzleMask := 0
		for t := 0; t < len(puzzle); t++ {
			puzzleMask |= 1 << (puzzle[t] - 'a')
		}
		total := 0
		sub := puzzleMask
		for sub != 0 {
			if sub&first != 0 {
				total += counts[sub]
			}
			sub = (sub - 1) & puzzleMask
		}
		answer = append(answer, total)
	}
	return answer
}
