func countGood(nums []int, k int) int64 {
	count := make(map[int]int64)
	var pairs, ans int64
	left := 0
	n := int64(len(nums))
	for right := 0; right < len(nums); right++ {
		x := nums[right]
		pairs += count[x]
		count[x]++
		for pairs >= int64(k) {
			ans += n - int64(right)
			y := nums[left]
			count[y]--
			pairs -= count[y]
			left++
		}
	}
	return ans
}
