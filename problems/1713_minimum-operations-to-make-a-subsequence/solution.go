func minOperations(target []int, arr []int) int {
	index := make(map[int]int, len(target))
	for i, v := range target {
		index[v] = i
	}
	tails := make([]int, 0, len(arr))
	for _, value := range arr {
		v, ok := index[value]
		if !ok {
			continue
		}
		lo, hi := 0, len(tails)
		for lo < hi {
			mid := int(uint(lo+hi) >> 1)
			if tails[mid] < v {
				lo = mid + 1
			} else {
				hi = mid
			}
		}
		if lo == len(tails) {
			tails = append(tails, v)
		} else {
			tails[lo] = v
		}
	}
	return len(target) - len(tails)
}
