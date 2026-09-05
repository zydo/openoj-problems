// Counting works because each operation removes the current minimum: exactly
// the values strictly below k are removed, one apiece, and nothing else is.
func fewestRemovals(nums []int, k int) int {
	count := 0
	for _, value := range nums {
		if value < k {
			count++
		}
	}
	return count
}
