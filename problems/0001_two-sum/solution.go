import "sort"

func twoSum(nums []int, target int) []int {
	indexes := make([]int, len(nums))
	for i := range indexes {
		indexes[i] = i
	}
	sort.Slice(indexes, func(a, b int) bool { return nums[indexes[a]] < nums[indexes[b]] })
	lo, hi := 0, len(indexes)-1
	for lo < hi {
		sum := nums[indexes[lo]] + nums[indexes[hi]]
		if sum == target {
			return []int{indexes[lo], indexes[hi]}
		} else if sum < target {
			lo++
		} else {
			hi--
		}
	}
	return nil
}
