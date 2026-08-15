func maximumScore(nums []int, multipliers []int) int {
	m := len(multipliers)
	n := len(nums)
	const negInf = -(1 << 60)
	prev := make([]int64, m+1)
	cur := make([]int64, m+1)
	for i := m - 1; i >= 0; i-- {
		for l := 0; l <= i; l++ {
			r := i - l
			takeLeft := prev[l+1] + int64(multipliers[i])*int64(nums[l])
			takeRight := prev[l] + int64(multipliers[i])*int64(nums[n-1-r])
			if takeLeft >= takeRight {
				cur[l] = takeLeft
			} else {
				cur[l] = takeRight
			}
		}
		prev, cur = cur, prev
	}
	return int(prev[0])
}
