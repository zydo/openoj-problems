import "sort"

func largestPerimeter(nums []int) int64 {
	sort.Ints(nums)
	total := int64(0)
	for _, x := range nums {
		total += int64(x)
	}
	for i := len(nums) - 1; i > 1; i-- {
		if total-int64(nums[i]) > int64(nums[i]) {
			return total
		}
		total -= int64(nums[i])
	}
	return -1
}
