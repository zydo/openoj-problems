import "sort"

func minimumDifference(nums []int, k int) int {
	abs := func(v int) int {
		if v < 0 {
			return -v
		}
		return v
	}
	best := abs(nums[0] - k)
	current := []int{0}
	for _, value := range nums {
		nxt := []int{value}
		for _, prev := range current {
			nxt = append(nxt, prev|value)
		}
		sort.Ints(nxt)
		uniq := nxt[:0]
		for i, x := range nxt {
			if i == 0 || nxt[i-1] != x {
				uniq = append(uniq, x)
			}
		}
		current = uniq
		for _, x := range current {
			if diff := abs(x - k); diff < best {
				best = diff
			}
		}
	}
	return best
}
