import "sort"

func threeSum(nums []int) [][]int {
	sort.Ints(nums)
	n := len(nums)
	result := [][]int{}
	for i := 0; i+2 < n; i++ {
		if i > 0 && nums[i] == nums[i-1] {
			continue
		}
		if nums[i]*3 > 0 {
			break
		}
		left, right := i+1, n-1
		for left < right {
			total := nums[i] + nums[left] + nums[right]
			if total < 0 {
				left++
			} else if total > 0 {
				right--
			} else {
				result = append(result, []int{nums[i], nums[left], nums[right]})
				left++
				right--
				for left < right && nums[left] == nums[left-1] {
					left++
				}
				for left < right && nums[right] == nums[right+1] {
					right--
				}
			}
		}
	}
	return result
}
