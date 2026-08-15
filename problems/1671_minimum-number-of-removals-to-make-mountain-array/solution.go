func minimumMountainRemovals(nums []int) int {
	n := len(nums)
	lis := make([]int, n)
	lds := make([]int, n)
	for i := range lis {
		lis[i] = 1
		lds[i] = 1
	}
	for i := 0; i < n; i++ {
		for j := 0; j < i; j++ {
			if nums[j] < nums[i] && lis[j]+1 > lis[i] {
				lis[i] = lis[j] + 1
			}
		}
	}
	for i := n - 1; i >= 0; i-- {
		for j := i + 1; j < n; j++ {
			if nums[j] < nums[i] && lds[j]+1 > lds[i] {
				lds[i] = lds[j] + 1
			}
		}
	}
	best := 0
	for i := 0; i < n; i++ {
		if lis[i] >= 2 && lds[i] >= 2 {
			if lis[i]+lds[i]-1 > best {
				best = lis[i] + lds[i] - 1
			}
		}
	}
	return n - best
}
