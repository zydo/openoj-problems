import "sort"

func findKthLargest(nums []int, k int) int {
	sorted := append([]int(nil), nums...)
	sort.Ints(sorted)
	return sorted[len(sorted)-k]
}
