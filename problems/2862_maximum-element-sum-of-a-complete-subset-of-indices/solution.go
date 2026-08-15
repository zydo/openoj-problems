import "math"

func maximumSum(nums []int) int64 {
	squarefreePart := func(x int) int {
		result := 1
		d := 2
		for d*d <= x {
			if x%d == 0 {
				count := 0
				for x%d == 0 {
					x /= d
					count++
				}
				if count%2 == 1 {
					result *= d
				}
			}
			d++
		}
		if x > 1 {
			result *= x
		}
		return result
	}

	groups := make(map[int]int64)
	for i := 1; i <= len(nums); i++ {
		groups[squarefreePart(i)] += int64(nums[i-1])
	}
	best := int64(math.MinInt64)
	for _, v := range groups {
		if v > best {
			best = v
		}
	}
	return best
}
