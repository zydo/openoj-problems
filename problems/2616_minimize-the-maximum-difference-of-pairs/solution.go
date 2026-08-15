import "sort"

func minimizeMax(nums []int, p int) int {
	sorted := append([]int(nil), nums...)
	sort.Ints(sorted)
	n := len(sorted)
	can := func(diff int) bool {
		count := 0
		i := 1
		for i < n {
			if sorted[i]-sorted[i-1] <= diff {
				count++
				i += 2
			} else {
				i++
			}
		}
		return count >= p
	}
	lo, hi := 0, sorted[n-1]-sorted[0]
	for lo < hi {
		mid := lo + (hi-lo)/2
		if can(mid) {
			hi = mid
		} else {
			lo = mid + 1
		}
	}
	return lo
}
