import "sort"

func makesquare(matchsticks []int) bool {
	total := 0
	for _, v := range matchsticks {
		total += v
	}
	if total%4 != 0 {
		return false
	}
	side := total / 4
	sticks := make([]int, len(matchsticks))
	copy(sticks, matchsticks)
	sort.Sort(sort.Reverse(sort.IntSlice(sticks)))
	if len(sticks) == 0 || sticks[0] > side {
		return false
	}
	sides := []int{0, 0, 0, 0}

	var dfs func(i int) bool
	dfs = func(i int) bool {
		if i == len(sticks) {
			return sides[0] == side && sides[1] == side && sides[2] == side && sides[3] == side
		}
		value := sticks[i]
		var tried []int
		for j := 0; j < 4; j++ {
			dup := false
			for _, t := range tried {
				if t == sides[j] {
					dup = true
					break
				}
			}
			if dup {
				continue
			}
			tried = append(tried, sides[j])
			if sides[j]+value <= side {
				sides[j] += value
				if dfs(i + 1) {
					return true
				}
				sides[j] -= value
			}
		}
		return false
	}

	return dfs(0)
}
