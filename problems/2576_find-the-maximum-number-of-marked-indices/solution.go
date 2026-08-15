import "sort"

func maxNumOfMarkedIndices(nums []int) int {
	a := append([]int(nil), nums...)
	sort.Ints(a)
	n := len(a)
	i := 0
	for j := (n + 1) / 2; j < n; j++ {
		if 2*int64(a[i]) <= int64(a[j]) {
			i++
		}
	}
	return 2 * i
}
