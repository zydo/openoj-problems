import "sort"

func fullBloomFlowers(flowers [][]int, people []int) []int {
	n := len(flowers)
	starts := make([]int, n)
	ends := make([]int, n)
	for i, f := range flowers {
		starts[i] = f[0]
		ends[i] = f[1]
	}
	sort.Ints(starts)
	sort.Ints(ends)

	res := make([]int, len(people))
	for i, t := range people {
		// first index with starts[idx] > t
		a := sort.Search(n, func(j int) bool { return starts[j] > t })
		// first index with ends[idx] >= t
		b := sort.SearchInts(ends, t)
		res[i] = a - b
	}
	return res
}
