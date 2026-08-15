import "sort"

func canPartitionKSubsets(nums []int, k int) bool {
	total := 0
	for _, v := range nums {
		total += v
	}
	if total%k != 0 {
		return false
	}
	target := total / k
	nums = append([]int{}, nums...)
	sort.Sort(sort.Reverse(sort.IntSlice(nums)))
	if nums[0] > target {
		return false
	}
	n := len(nums)
	full := (1 << n) - 1
	memo := map[[2]int]bool{}

	var dfs func(mask, curr int) bool
	dfs = func(mask, curr int) bool {
		if mask == full {
			return true
		}
		if curr == target {
			return dfs(mask, 0)
		}
		key := [2]int{mask, curr}
		if v, ok := memo[key]; ok {
			return v
		}
		for i := 0; i < n; i++ {
			if (mask>>i)&1 == 0 && curr+nums[i] <= target {
				if dfs(mask|(1<<i), curr+nums[i]) {
					memo[key] = true
					return true
				}
			}
		}
		memo[key] = false
		return false
	}

	return dfs(0, 0)
}
