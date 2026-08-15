import "sort"

func minimumCost(m int, n int, horizontalCut []int, verticalCut []int) int {
	hcuts := append([]int(nil), horizontalCut...)
	vcuts := append([]int(nil), verticalCut...)
	sort.Sort(sort.Reverse(sort.IntSlice(hcuts)))
	sort.Sort(sort.Reverse(sort.IntSlice(vcuts)))
	i, j := 0, 0
	hMade, vMade := 0, 0
	total := 0
	for i < len(hcuts) && j < len(vcuts) {
		if hcuts[i] >= vcuts[j] {
			total += hcuts[i] * (vMade + 1)
			i++
			hMade++
		} else {
			total += vcuts[j] * (hMade + 1)
			j++
			vMade++
		}
	}
	for i < len(hcuts) {
		total += hcuts[i] * (vMade + 1)
		i++
	}
	for j < len(vcuts) {
		total += vcuts[j] * (hMade + 1)
		j++
	}
	return total
}
