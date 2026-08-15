func combinationSum(candidates []int, target int) [][]int {
	results := [][]int{}
	path := []int{}

	var backtrack func(start, remaining int)
	backtrack = func(start, remaining int) {
		if remaining == 0 {
			comb := make([]int, len(path))
			copy(comb, path)
			results = append(results, comb)
			return
		}
		for i := start; i < len(candidates); i++ {
			value := candidates[i]
			if value > remaining {
				continue
			}
			path = append(path, value)
			backtrack(i, remaining-value)
			path = path[:len(path)-1]
		}
	}

	backtrack(0, target)
	return results
}
