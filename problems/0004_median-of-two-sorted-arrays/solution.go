import "math"

func findMedianSortedArrays(nums1 []int, nums2 []int) float64 {
	if len(nums1) > len(nums2) {
		nums1, nums2 = nums2, nums1
	}
	m, n := len(nums1), len(nums2)
	total := m + n
	half := total / 2
	lo, hi := 0, m
	for {
		i := (lo + hi) / 2
		j := half - i
		aLeft, aRight := int64(math.MinInt), int64(math.MaxInt)
		if i > 0 {
			aLeft = int64(nums1[i-1])
		}
		if i < m {
			aRight = int64(nums1[i])
		}
		bLeft, bRight := int64(math.MinInt), int64(math.MaxInt)
		if j > 0 {
			bLeft = int64(nums2[j-1])
		}
		if j < n {
			bRight = int64(nums2[j])
		}
		if aLeft <= bRight && bLeft <= aRight {
			lo64 := aLeft
			if bLeft > lo64 {
				lo64 = bLeft
			}
			hi64 := aRight
			if bRight < hi64 {
				hi64 = bRight
			}
			if total%2 == 1 {
				return float64(hi64)
			}
			return float64(lo64+hi64) / 2
		}
		if aLeft > bRight {
			hi = i - 1
		} else {
			lo = i + 1
		}
	}
}
