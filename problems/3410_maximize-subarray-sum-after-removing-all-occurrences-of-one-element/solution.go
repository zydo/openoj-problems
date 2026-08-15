func maxSubarraySum(nums []int) int64 {
	n := len(nums)
	if n == 1 {
		return int64(nums[0])
	}
	// prefixMap keyed by the deleted value; key 0 tracks min prefix sum.
	prefixMap := make(map[int]int64)
	prefixMap[0] = 0
	var prefixSum int64
	var minPrefix int64
	result := int64(nums[0])
	for _, num := range nums {
		prefixSum += int64(num)
		if prefixSum-minPrefix > result {
			result = prefixSum - minPrefix
		}
		if num < 0 {
			p0 := prefixMap[0]
			var val int64
			if prev, ok := prefixMap[num]; ok {
				if p0 < prev {
					val = p0 + int64(num)
				} else {
					val = prev + int64(num)
				}
			} else {
				val = p0 + int64(num)
			}
			prefixMap[num] = val
			if val < minPrefix {
				minPrefix = val
			}
		}
		if prefixSum < prefixMap[0] {
			prefixMap[0] = prefixSum
		}
		if prefixMap[0] < minPrefix {
			minPrefix = prefixMap[0]
		}
	}
	return result
}
