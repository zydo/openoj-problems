func singleNumber(nums []int) int {
	result := int64(0)
	for i := uint(0); i < 32; i++ {
		count := 0
		for _, value := range nums {
			count += (value >> i) & 1
		}
		if count%3 != 0 {
			result |= 1 << i
		}
	}
	return int(int32(result))
}
