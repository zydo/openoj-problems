import "sort"

func countClearingProducts(factors []int, values []int, threshold int64) []int {
	// a pair works iff factor * value >= threshold, i.e. value >= need;
	// qualifying values are exactly the strongest suffix of the sorted slice
	sort.Ints(values)
	m := len(values)
	res := make([]int, len(factors))
	for i, f := range factors {
		// ceil(threshold / f) in integer arithmetic: exact even at 1e10
		need := (threshold + int64(f) - 1) / int64(f)
		// first index with values[idx] >= need
		idx := sort.Search(m, func(j int) bool { return int64(values[j]) >= need })
		// every value from idx on is >= need: that suffix all qualifies
		res[i] = m - idx
	}
	return res
}
