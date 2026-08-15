func minPatches(nums []int, n int) int {
	patches := 0
	i := 0
	reachable := int64(1)
	for reachable <= int64(n) {
		if i < len(nums) && int64(nums[i]) <= reachable {
			reachable += int64(nums[i])
			i++
		} else {
			reachable += reachable
			patches++
		}
	}
	return patches
}
