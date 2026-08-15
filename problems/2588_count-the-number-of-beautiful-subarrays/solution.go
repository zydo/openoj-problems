func beautifulSubarrays(nums []int) int64 {
	count := make(map[int]int64)
	count[0] = 1
	x := 0
	var ans int64
	for _, v := range nums {
		x ^= v
		ans += count[x]
		count[x]++
	}
	return ans
}
