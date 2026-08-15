func countSubarrays(nums []int, minK int, maxK int) int64 {
	count := int64(0)
	lastBad := int64(-1)
	lastMin := int64(-1)
	lastMax := int64(-1)
	for i, x := range nums {
		if x < minK || x > maxK {
			lastBad = int64(i)
		}
		if x == minK {
			lastMin = int64(i)
		}
		if x == maxK {
			lastMax = int64(i)
		}
		b := lastMin
		if lastMax < b {
			b = lastMax
		}
		if b-lastBad > 0 {
			count += b - lastBad
		}
	}
	return count
}
