func maximumValueSum(nums []int, k int, edges [][]int) int64 {
	base := int64(0)
	posCount := 0
	minPos := int64(0)
	maxNonPos := int64(0)
	hasPos := false
	hasNonPos := false
	for _, x := range nums {
		d := int64(x^k) - int64(x)
		base += int64(x)
		if d > 0 {
			posCount++
			base += d
			if !hasPos || d < minPos {
				minPos = d
			}
			hasPos = true
		} else {
			if !hasNonPos || d > maxNonPos {
				maxNonPos = d
			}
			hasNonPos = true
		}
	}
	if posCount%2 == 0 {
		return base
	}
	var best int64
	if hasPos {
		best = minPos
	} else {
		best = int64(1) << 62
	}
	if hasNonPos {
		penalty := -maxNonPos
		if penalty < best {
			best = penalty
		}
	}
	return base - best
}
