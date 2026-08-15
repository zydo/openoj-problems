func findLength(nums1 []int, nums2 []int) int {
	m, n := len(nums1), len(nums2)
	dp := make([]int, n+1)
	best := 0
	for i := m - 1; i >= 0; i-- {
		cur := make([]int, n+1)
		for j := n - 1; j >= 0; j-- {
			if nums1[i] == nums2[j] {
				cur[j] = dp[j+1] + 1
				if cur[j] > best {
					best = cur[j]
				}
			}
		}
		dp = cur
	}
	return best
}
