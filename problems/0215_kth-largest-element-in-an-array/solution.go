import "sort"

func findKthLargest(nums []int, k int) int {
	// Sort a copy ascending; the kth largest sits k slots from the end.
	sorted := append([]int(nil), nums...)
	sort.Ints(sorted)
	return sorted[len(sorted)-k]
}
