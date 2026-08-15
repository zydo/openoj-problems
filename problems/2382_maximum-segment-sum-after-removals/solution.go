func maximumSegmentSum(nums []int, removeQueries []int) []int64 {
	n := len(nums)
	parent := make([]int, n)
	for i := range parent {
		parent[i] = i
	}
	ssum := make([]int64, n)
	active := make([]bool, n)

	var find func(int) int
	find = func(x int) int {
		for parent[x] != x {
			parent[x] = parent[parent[x]]
			x = parent[x]
		}
		return x
	}

	answer := make([]int64, 0, n)
	answer = append(answer, 0)
	best := int64(0)
	for qi := len(removeQueries) - 1; qi >= 1; qi-- {
		i := removeQueries[qi]
		active[i] = true
		ssum[i] = int64(nums[i])
		for _, j := range [2]int{i - 1, i + 1} {
			if j >= 0 && j < n && active[j] {
				a, b := find(i), find(j)
				if a != b {
					parent[a] = b
					ssum[b] += ssum[a]
				}
			}
		}
		if s := ssum[find(i)]; s > best {
			best = s
		}
		answer = append(answer, best)
	}
	for l, r := 0, len(answer)-1; l < r; l, r = l+1, r-1 {
		answer[l], answer[r] = answer[r], answer[l]
	}
	return answer
}
