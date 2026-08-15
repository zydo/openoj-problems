func maximumSubarraySum(nums []int, k int) int64 {
	counts := make(map[int]int)
	var windowSum int64
	var best int64
	for i, value := range nums {
		counts[value]++
		windowSum += int64(value)
		if i >= k {
			old := nums[i-k]
			if counts[old] == 1 {
				delete(counts, old)
			} else {
				counts[old]--
			}
			windowSum -= int64(old)
		}
		if i >= k-1 && len(counts) == k && windowSum > best {
			best = windowSum
		}
	}
	return best
}
