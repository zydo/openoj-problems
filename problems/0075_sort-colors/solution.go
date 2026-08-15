func sortColors(nums []int) []int {
	counts := [3]int{}
	for _, value := range nums {
		counts[value]++
	}
	index := 0
	for color := 0; color < 3; color++ {
		for c := 0; c < counts[color]; c++ {
			nums[index] = color
			index++
		}
	}
	return nums
}
