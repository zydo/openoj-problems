import "sort"

func maxDistance(position []int, m int) int {
	pos := make([]int, len(position))
	copy(pos, position)
	sort.Ints(pos)

	feasible := func(distance int) bool {
		count := 1
		last := pos[0]
		for _, p := range pos[1:] {
			if p-last >= distance {
				count++
				last = p
				if count >= m {
					return true
				}
			}
		}
		return count >= m
	}

	lo, hi := 1, pos[len(pos)-1]-pos[0]
	for lo < hi {
		mid := lo + (hi-lo+1)/2
		if feasible(mid) {
			lo = mid
		} else {
			hi = mid - 1
		}
	}
	return lo
}
