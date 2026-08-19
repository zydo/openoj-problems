func countSubarraysWithExtremes(nums []int, lo int, hi int) int64 {
	count := int64(0)
	// most recent positions of an out-of-range element, lo, and hi
	lastBad := int64(-1)
	lastMin := int64(-1)
	lastMax := int64(-1)
	for i, x := range nums {
		// a valid subarray ending later must start after a bad element
		if x < lo || x > hi {
			lastBad = int64(i)
		}
		// tracking the last occurrence is enough: it covers earlier ones
		if x == lo {
			lastMin = int64(i)
		}
		if x == hi {
			lastMax = int64(i)
		}
		// b = the earlier extreme marker: starting at or before b still
		// includes both lo and hi
		b := lastMin
		if lastMax < b {
			b = lastMax
		}
		// valid starts for this right end are (lastBad, b]; skip when none
		if b-lastBad > 0 {
			count += b - lastBad
		}
	}
	return count
}
