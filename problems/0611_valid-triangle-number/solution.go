import "sort"

func triangleNumber(nums []int) int {
	sorted := make([]int, len(nums))
	copy(sorted, nums)
	sort.Ints(sorted)
	n := len(sorted)
	count := 0
	for i := n - 1; i > 1; i-- {
		if sorted[i] == 0 {
			break
		}
		lo, hi := 0, i-1
		for lo < hi {
			if sorted[lo]+sorted[hi] > sorted[i] {
				count += hi - lo
				hi--
			} else {
				lo++
			}
		}
	}
	return count
}
