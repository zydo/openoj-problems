func minimumReplacement(nums []int) int64 {
	ops := int64(0)
	bound := int64(nums[len(nums)-1])
	for i := len(nums) - 2; i >= 0; i-- {
		x := int64(nums[i])
		if x <= bound {
			bound = x
		} else {
			k := (x + bound - 1) / bound
			ops += k - 1
			bound = x / k
		}
	}
	return ops
}
