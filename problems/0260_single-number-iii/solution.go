func singleNumber(nums []int) []int {
	total := 0
	for _, value := range nums {
		total ^= value
	}
	mask := total & -total
	first := 0
	for _, value := range nums {
		if value&mask != 0 {
			first ^= value
		}
	}
	second := total ^ first
	if first > second {
		first, second = second, first
	}
	return []int{first, second}
}
