import "sort"

func minOperations(nums []int) int {
	tails := make([]int, 0, len(nums))
	for _, x := range nums {
		v := -x
		pos := sort.Search(len(tails), func(i int) bool { return tails[i] > v })
		if pos == len(tails) {
			tails = append(tails, v)
		} else {
			tails[pos] = v
		}
	}
	return len(tails)
}
