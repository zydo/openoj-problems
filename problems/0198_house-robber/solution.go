func rob(nums []int) int {
	prev, cur := 0, 0
	for _, x := range nums {
		prev, cur = cur, max(cur, prev+x)
	}
	return cur
}
