import "sort"

func maxChunksToSorted(arr []int) int {
	ordered := make([]int, len(arr))
	copy(ordered, arr)
	sort.Ints(ordered)
	counts := map[int]int{}
	balance := 0
	chunks := 0
	for i := range arr {
		counts[arr[i]]++
		if counts[arr[i]] > 0 {
			balance++
		} else {
			balance--
		}
		counts[ordered[i]]--
		if counts[ordered[i]] < 0 {
			balance++
		} else {
			balance--
		}
		if balance == 0 {
			chunks++
		}
	}
	return chunks
}
