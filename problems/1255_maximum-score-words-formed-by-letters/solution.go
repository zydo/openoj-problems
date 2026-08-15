func maxScoreWords(words []string, letters []string, score []int) int {
	var available [26]int
	for _, s := range letters {
		available[s[0]-'a']++
	}
	n := len(words)
	needs := make([][26]int, n)
	values := make([]int, n)
	for i, w := range words {
		for k := 0; k < len(w); k++ {
			j := w[k] - 'a'
			needs[i][j]++
			values[i] += score[j]
		}
	}

	best := 0
	var dfs func(i int, remaining [26]int, total int)
	dfs = func(i int, remaining [26]int, total int) {
		if total > best {
			best = total
		}
		if i == n {
			return
		}
		dfs(i+1, remaining, total)
		need := needs[i]
		ok := true
		for j := 0; j < 26; j++ {
			if remaining[j] < need[j] {
				ok = false
				break
			}
		}
		if ok {
			next := remaining
			for j := 0; j < 26; j++ {
				next[j] -= need[j]
			}
			dfs(i+1, next, total+values[i])
		}
	}
	dfs(0, available, 0)
	return best
}
