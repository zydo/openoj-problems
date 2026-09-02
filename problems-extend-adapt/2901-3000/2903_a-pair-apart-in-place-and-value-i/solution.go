// The first ordered pair (i, j) clearing both thresholds is a valid answer
// by the statement's "return any of them"; the conditions are symmetric in
// the two indices, so scan order only picks the witness. When every ordered
// pair fails both checks, no answer exists and the sentinel goes back.
func farApartPair(nums []int, indexGap int, valueGap int) []int {
	for i := 0; i < len(nums); i++ {
		for j := 0; j < len(nums); j++ {
			if abs(i-j) >= indexGap && abs(nums[i]-nums[j]) >= valueGap {
				return []int{i, j}
			}
		}
	}
	return []int{-1, -1}
}

// abs is the integer absolute value; Go 1.21's builtin abs operates on floats.
func abs(x int) int {
	if x < 0 {
		return -x
	}
	return x
}
