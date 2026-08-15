import "sort"

func makeSubKSumEqual(arr []int, k int) int64 {
	gcd := func(a, b int) int {
		for b != 0 {
			a, b = b, a%b
		}
		return a
	}
	n := len(arr)
	g := gcd(n, k)
	total := int64(0)
	for r := 0; r < g; r++ {
		group := []int{}
		for i := r; i < n; i += g {
			group = append(group, arr[i])
		}
		sort.Ints(group)
		median := group[len(group)/2]
		for _, v := range group {
			d := int64(v - median)
			if d < 0 {
				d = -d
			}
			total += d
		}
	}
	return total
}
