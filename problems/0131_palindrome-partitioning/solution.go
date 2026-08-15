func partition(s string) [][]string {
	n := len(s)
	isPal := make([][]bool, n)
	for i := range isPal {
		isPal[i] = make([]bool, n)
	}
	for i := n - 1; i >= 0; i-- {
		for j := i; j < n; j++ {
			if s[i] == s[j] && (j-i < 2 || isPal[i+1][j-1]) {
				isPal[i][j] = true
			}
		}
	}

	result := [][]string{}
	current := []string{}

	var backtrack func(start int)
	backtrack = func(start int) {
		if start == n {
			partition := make([]string, len(current))
			copy(partition, current)
			result = append(result, partition)
			return
		}
		for end := start; end < n; end++ {
			if isPal[start][end] {
				current = append(current, s[start:end+1])
				backtrack(end + 1)
				current = current[:len(current)-1]
			}
		}
	}
	backtrack(0)
	return result
}
