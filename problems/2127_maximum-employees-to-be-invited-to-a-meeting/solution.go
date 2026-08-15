func maximumInvitations(favorite []int) int {
	n := len(favorite)
	indeg := make([]int, n)
	for _, f := range favorite {
		indeg[f]++
	}

	depth := make([]int, n)
	for i := range depth {
		depth[i] = 1
	}
	queue := make([]int, 0, n)
	for i := 0; i < n; i++ {
		if indeg[i] == 0 {
			queue = append(queue, i)
		}
	}
	for head := 0; head < len(queue); head++ {
		u := queue[head]
		v := favorite[u]
		if depth[u]+1 > depth[v] {
			depth[v] = depth[u] + 1
		}
		indeg[v]--
		if indeg[v] == 0 {
			queue = append(queue, v)
		}
	}

	maxCycle := 0
	pairSum := 0
	visited := make([]bool, n)
	for i := 0; i < n; i++ {
		if indeg[i] > 0 && !visited[i] {
			cycleLen := 0
			cur := i
			for !visited[cur] {
				visited[cur] = true
				cycleLen++
				cur = favorite[cur]
			}
			if cycleLen == 2 {
				pairSum += depth[i] + depth[favorite[i]]
			} else if cycleLen > maxCycle {
				maxCycle = cycleLen
			}
		}
	}
	if maxCycle > pairSum {
		return maxCycle
	}
	return pairSum
}
