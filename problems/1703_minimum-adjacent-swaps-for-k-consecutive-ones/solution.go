func minMoves(nums []int, k int) int {
	if k <= 1 {
		return 0
	}
	pos := make([]int, 0, len(nums))
	for i, v := range nums {
		if v == 1 {
			pos = append(pos, i)
		}
	}
	m := len(pos)
	q := make([]int64, m)
	pref := make([]int64, m+1)
	for i := 0; i < m; i++ {
		q[i] = int64(pos[i] - i)
		pref[i+1] = pref[i] + q[i]
	}
	best := int64(1) << 62
	for i := 0; i+k <= m; i++ {
		mid := i + k/2
		left := q[mid]*int64(mid-i) - (pref[mid] - pref[i])
		right := (pref[i+k] - pref[mid+1]) - q[mid]*int64(i+k-1-mid)
		cost := left + right
		if cost < best {
			best = cost
		}
	}
	return int(best)
}
