import "sort"

func countQuadrupleZeroSums(first []int, second []int, third []int, fourth []int) int {
	// Same split as the hash-map version -- a+b+c+d = 0 iff a+b = -(c+d)
	// -- but the join is ordered ground rather than a table: materialise
	// both halves' pair sums and sort the right one.
	left := make([]int, 0, len(first)*len(second))
	for _, a := range first {
		for _, b := range second {
			left = append(left, a+b)
		}
	}
	right := make([]int, 0, len(third)*len(fourth))
	for _, c := range third {
		for _, d := range fourth {
			right = append(right, c+d)
		}
	}
	sort.Ints(right)
	// Each left sum asks "how many right sums equal my negation?"; on a
	// sorted array a pair of binary searches brackets exactly that run.
	// Counts can reach n^4 = 1.6e9, so the tally widens to 64 bits.
	total := int64(0)
	for _, sum := range left {
		negated := -sum
		lower := sort.SearchInts(right, negated)
		upper := sort.Search(len(right), func(i int) bool { return right[i] > negated })
		total += int64(upper - lower)
	}
	return int(total)
}
