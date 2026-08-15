import "sort"

func minAbsDifference(nums []int, goal int) int {
	subsetSums := func(arr []int) []int {
		sums := make([]int, 1, 1<<len(arr))
		sums[0] = 0
		for _, value := range arr {
			size := len(sums)
			for j := 0; j < size; j++ {
				sums = append(sums, sums[j]+value)
			}
		}
		return sums
	}

	half := len(nums) / 2
	left := subsetSums(nums[:half])
	right := subsetSums(nums[half:])
	sort.Ints(left)
	best := -1
	for _, s := range right {
		need := goal - s
		idx := sort.SearchInts(left, need)
		for _, j := range []int{idx - 1, idx} {
			if j >= 0 && j < len(left) {
				diff := left[j] + s - goal
				if diff < 0 {
					diff = -diff
				}
				if best == -1 || diff < best {
					best = diff
				}
			}
		}
	}
	return best
}
