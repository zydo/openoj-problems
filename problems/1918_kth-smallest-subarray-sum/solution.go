func kthSmallestSubarraySum(nums []int, k int) int {
	countAtMost := func(limit int64) int64 {
		var total int64
		var windowSum int64
		left := 0
		for right, value := range nums {
			windowSum += int64(value)
			for windowSum > limit {
				windowSum -= int64(nums[left])
				left++
			}
			total += int64(right - left + 1)
		}
		return total
	}

	lo := int64(1 << 62)
	hi := int64(0)
	for _, value := range nums {
		v := int64(value)
		if v < lo {
			lo = v
		}
		hi += v
	}
	for lo < hi {
		mid := (lo + hi) / 2
		if countAtMost(mid) >= int64(k) {
			hi = mid
		} else {
			lo = mid + 1
		}
	}
	return int(lo)
}
