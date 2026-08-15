import "strconv"

func countDistinct(nums []int, k int, p int) int {
	seen := make(map[string]bool)
	n := len(nums)
	for i := 0; i < n; i++ {
		divisible := 0
		cur := make([]byte, 0, 64)
		for j := i; j < n; j++ {
			if nums[j]%p == 0 {
				divisible++
			}
			if len(cur) > 0 {
				cur = append(cur, ',')
			}
			cur = strconv.AppendInt(cur, int64(nums[j]), 10)
			if divisible > k {
				break
			}
			seen[string(cur)] = true
		}
	}
	return len(seen)
}
