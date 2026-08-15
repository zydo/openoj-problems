func numSubarrayBoundedMax(nums []int, left int, right int) int {
	countBelow := func(bound int) int64 {
		var total, run int64
		for _, v := range nums {
			if v <= bound {
				run++
				total += run
			} else {
				run = 0
			}
		}
		return total
	}

	return int(countBelow(right) - countBelow(left-1))
}
