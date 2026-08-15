func minKBitFlips(nums []int, k int) int {
	n := len(nums)
	hint := make([]int, n)
	flips := 0
	flip := 0
	for i := 0; i < n; i++ {
		flip ^= hint[i]
		if (nums[i] ^ flip) == 0 {
			if i+k > n {
				return -1
			}
			flips++
			flip ^= 1
			if i+k < n {
				hint[i+k] ^= 1
			}
		}
	}
	return flips
}
