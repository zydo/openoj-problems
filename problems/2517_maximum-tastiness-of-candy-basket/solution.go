import "sort"

func maximumTastiness(price []int, k int) int {
	p := append([]int(nil), price...)
	sort.Ints(p)
	feasible := func(x int) bool {
		count := 1
		last := p[0]
		for _, v := range p[1:] {
			if v-last >= x {
				count++
				last = v
			}
		}
		return count >= k
	}
	lo, hi := 0, p[len(p)-1]-p[0]
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
