func containsDuplicate(nums []int) bool {
	seen := make(map[int]struct{}, len(nums))
	for _, value := range nums {
		if _, ok := seen[value]; ok {
			return true
		}
		seen[value] = struct{}{}
	}
	return false
}
