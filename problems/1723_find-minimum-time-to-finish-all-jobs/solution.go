import "sort"

func minimumTimeRequired(jobs []int, k int) int {
	sortedJobs := make([]int, len(jobs))
	copy(sortedJobs, jobs)
	sort.Sort(sort.Reverse(sort.IntSlice(sortedJobs)))
	n := len(sortedJobs)
	best := 0
	for _, j := range sortedJobs {
		best += j
	}
	loads := make([]int64, k)

	var dfs func(i int)
	dfs = func(i int) {
		if i == n {
			current := int64(0)
			for _, l := range loads {
				if l > current {
					current = l
				}
			}
			if current < int64(best) {
				best = int(current)
			}
			return
		}
		seen := make(map[int64]bool)
		for w := 0; w < k; w++ {
			if seen[loads[w]] {
				continue
			}
			seen[loads[w]] = true
			if loads[w]+int64(sortedJobs[i]) >= int64(best) {
				continue
			}
			loads[w] += int64(sortedJobs[i])
			dfs(i + 1)
			loads[w] -= int64(sortedJobs[i])
			if loads[w] == 0 {
				break
			}
		}
	}

	dfs(0)
	return best
}
