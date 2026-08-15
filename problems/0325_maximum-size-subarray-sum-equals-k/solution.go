func maxSubArrayLen(nums []int, k int) int {
	first := make(map[int64]int)
	first[0] = -1
	var acc int64
	best := 0
	for i, x := range nums {
		acc += int64(x)
		if j, ok := first[acc-int64(k)]; ok && i-j > best {
			best = i - j
		}
		if _, ok := first[acc]; !ok {
			first[acc] = i
		}
	}
	return best
}
