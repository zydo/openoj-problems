import "math"

func find132pattern(nums []int) bool {
	if len(nums) < 3 {
		return false
	}
	stack := make([]int, 0, len(nums))
	third := int64(math.MinInt64)
	for i := len(nums) - 1; i >= 0; i-- {
		value := nums[i]
		if int64(value) < third {
			return true
		}
		for len(stack) > 0 && stack[len(stack)-1] < value {
			third = int64(stack[len(stack)-1])
			stack = stack[:len(stack)-1]
		}
		stack = append(stack, value)
	}
	return false
}
