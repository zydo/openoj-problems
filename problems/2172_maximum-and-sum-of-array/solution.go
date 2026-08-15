import "math/bits"

func maximumANDSum(nums []int, numSlots int) int {
	positions := 2 * numSlots
	size := 1 << positions
	dp := make([]int, size)
	for i := range dp {
		dp[i] = -1
	}
	dp[0] = 0
	best := 0
	for mask := 0; mask < size; mask++ {
		if dp[mask] < 0 {
			continue
		}
		i := bits.OnesCount(uint(mask))
		if i == len(nums) {
			if dp[mask] > best {
				best = dp[mask]
			}
			continue
		}
		for p := 0; p < positions; p++ {
			if mask&(1<<p) != 0 {
				continue
			}
			nxt := dp[mask] + (nums[i] & (p/2 + 1))
			slotMask := mask | (1 << p)
			if nxt > dp[slotMask] {
				dp[slotMask] = nxt
			}
		}
	}
	return best
}
