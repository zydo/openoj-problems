func onceTwice(nums []int) []int {
	counts := make(map[int]int)
	for _, x := range nums {
		counts[x]++
	}
	once, twice := 0, 0
	for value, count := range counts {
		if count == 1 {
			once = value
		} else if count == 2 {
			twice = value
		}
	}
	return []int{once, twice}
}
