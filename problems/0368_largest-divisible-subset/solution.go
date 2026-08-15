import "sort"

func largestDivisibleSubset(nums []int) []int {
	arr := make([]int, len(nums))
	copy(arr, nums)
	sort.Ints(arr)
	n := len(arr)
	if n == 0 {
		return []int{}
	}
	dp := make([]int, n)
	parent := make([]int, n)
	for i := range dp {
		dp[i] = 1
		parent[i] = -1
	}
	best := 0
	for i := 0; i < n; i++ {
		for j := 0; j < i; j++ {
			if arr[i]%arr[j] == 0 && dp[j]+1 > dp[i] {
				dp[i] = dp[j] + 1
				parent[i] = j
			}
		}
		if dp[i] > dp[best] {
			best = i
		}
	}
	result := []int{}
	for i := best; i != -1; i = parent[i] {
		result = append(result, arr[i])
	}
	for l, r := 0, len(result)-1; l < r; l, r = l+1, r-1 {
		result[l], result[r] = result[r], result[l]
	}
	return result
}
