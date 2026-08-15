import "sort"

func maxFrequency(nums []int, k int) int {
	arr := make([]int, len(nums))
	copy(arr, nums)
	sort.Ints(arr)
	best := 1
	left := 0
	windowSum := int64(0)
	for right := 0; right < len(arr); right++ {
		value := int64(arr[right])
		windowSum += value
		for int64(right-left+1)*value-windowSum > int64(k) {
			windowSum -= int64(arr[left])
			left++
		}
		if right-left+1 > best {
			best = right - left + 1
		}
	}
	return best
}
