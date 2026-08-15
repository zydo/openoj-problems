import "sort"

func maximumCoins(coins [][]int, k int) int64 {
	segments := make([][]int, len(coins))
	copy(segments, coins)
	sort.SliceStable(segments, func(i, j int) bool { return segments[i][0] < segments[j][0] })
	n := len(segments)
	lefts := make([]int64, n)
	rights := make([]int64, n)
	cs := make([]int64, n)
	area := make([]int64, n)
	prefix := make([]int64, n+1)
	for i := 0; i < n; i++ {
		lefts[i] = int64(segments[i][0])
		rights[i] = int64(segments[i][1])
		cs[i] = int64(segments[i][2])
		area[i] = cs[i] * (rights[i] - lefts[i] + 1)
		prefix[i+1] = prefix[i] + area[i]
	}

	window := func(start int64) int64 {
		end := start + int64(k) - 1
		a := sort.Search(n, func(i int) bool { return rights[i] >= start }) // bisect_left
		b := sort.Search(n, func(i int) bool { return lefts[i] > end }) - 1 // bisect_right - 1
		if a > b {
			return 0
		}
		loA := lefts[a]
		if start > loA {
			loA = start
		}
		hiA := rights[a]
		if end < hiA {
			hiA = end
		}
		if a == b {
			if loA <= hiA {
				return cs[a] * (hiA - loA + 1)
			}
			return 0
		}
		loB := lefts[b]
		if start > loB {
			loB = start
		}
		hiB := rights[b]
		if end < hiB {
			hiB = end
		}
		total := prefix[b+1] - prefix[a]
		total += cs[a]*(hiA-loA+1) - area[a]
		total += cs[b]*(hiB-loB+1) - area[b]
		return total
	}

	best := int64(0)
	for i := 0; i < n; i++ {
		for _, candidate := range []int64{lefts[i], rights[i] - int64(k) + 1} {
			value := window(candidate)
			if value > best {
				best = value
			}
		}
	}
	return best
}
