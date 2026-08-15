func maximumScore(nums []int, k int) int {
	n := len(nums)
	best := nums[k]
	lo, hi := k, k
	curMin := nums[k]
	for lo > 0 || hi < n-1 {
		var cand int
		if lo == 0 {
			hi++
			cand = nums[hi]
		} else if hi == n-1 {
			lo--
			cand = nums[lo]
		} else if nums[lo-1] >= nums[hi+1] {
			lo--
			cand = nums[lo]
		} else {
			hi++
			cand = nums[hi]
		}
		if cand < curMin {
			curMin = cand
		}
		score := curMin * (hi - lo + 1)
		if score > best {
			best = score
		}
	}
	return best
}
