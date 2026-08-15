func minOperations(nums []int) int {
	arr := make([]int, len(nums))
	copy(arr, nums)
	n := len(arr)
	operations := 0
	for i := 0; i+2 < n; i++ {
		if arr[i] == 0 {
			operations++
			arr[i] ^= 1
			arr[i+1] ^= 1
			arr[i+2] ^= 1
		}
	}
	for i := 0; i < n; i++ {
		if arr[i] == 0 {
			return -1
		}
	}
	return operations
}
