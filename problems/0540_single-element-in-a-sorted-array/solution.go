func singleNonDuplicate(nums []int) int {
	lo, hi := 0, len(nums)-1
	for lo < hi {
		mid := (lo + hi) / 2
		if mid%2 == 1 {
			mid -= 1
		}
		if nums[mid] == nums[mid+1] {
			lo = mid + 2
		} else {
			hi = mid
		}
	}
	return nums[lo]
}
