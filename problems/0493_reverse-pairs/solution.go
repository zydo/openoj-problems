func reversePairs(nums []int) int {
	var mergeCount func(arr []int64) ([]int64, int64)
	mergeCount = func(arr []int64) ([]int64, int64) {
		if len(arr) <= 1 {
			return arr, 0
		}
		mid := len(arr) / 2
		left, c1 := mergeCount(arr[:mid])
		right, c2 := mergeCount(arr[mid:])
		count := c1 + c2
		// count cross reverse pairs: left[i] > 2 * right[j]
		j := 0
		for i := range left {
			for j < len(right) && left[i] > 2*right[j] {
				j++
			}
			count += int64(j)
		}
		// merge
		merged := make([]int64, 0, len(arr))
		i := 0
		j = 0
		for i < len(left) && j < len(right) {
			if left[i] <= right[j] {
				merged = append(merged, left[i])
				i++
			} else {
				merged = append(merged, right[j])
				j++
			}
		}
		merged = append(merged, left[i:]...)
		merged = append(merged, right[j:]...)
		return merged, count
	}

	arr := make([]int64, len(nums))
	for i, v := range nums {
		arr[i] = int64(v)
	}
	_, ans := mergeCount(arr)
	return int(ans)
}
