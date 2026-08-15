func shortestSequence(rolls []int, k int) int {
	seen := make(map[int]struct{})
	answer := 1
	for _, r := range rolls {
		seen[r] = struct{}{}
		if len(seen) == k {
			answer++
			seen = make(map[int]struct{})
		}
	}
	return answer
}
